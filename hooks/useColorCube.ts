import { ColorCube, CUBE_COLORS } from '@/constants';
import { useRefreshRewardsCounter } from '@/contexts/RewardsContext';
import { CubeColors } from '@/types';
import { shuffleArray } from '@/utils';
import { useEffect, useState } from 'react';

export default function useColorCube(){
    const [time, setTime] = useState(11)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feintPos, setFeintPos] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState<number | null>(null)
    const [qStatus, setQStatus] = useState({ correct: false, wrong: false })
    const [cubeColors, setCubeColors] = useState<CubeColors[]>([])
    const [gameOver, setGameOver] = useState(false)
    const [isHighScore, setIsHighScore] = useState(false)
    const {savePoint} = useRefreshRewardsCounter();

    function initGame() {
        const shuffled = shuffleArray(CUBE_COLORS)
        setCubeColors(shuffled.slice(0, 10));
        setFeintPos(Math.floor(Math.random() * 16));
        setSelected(null)
    }

    function resetGame() {
        setScore(0)
        setTime(15)
        setCurrentIndex(0)
        setGameOver(false)
        initGame()
    }

    const onGameOver = () =>{
        setGameOver(true);
        savePoint(ColorCube, score)
    }

    function validate(index: number) {
        if (gameOver) return;
        
        setSelected(index)
        if (index === feintPos) {
            setQStatus({ correct: true, wrong: false })
            setScore(p => p + 100)
        } else {
            setQStatus({ correct: false, wrong: true })
        }

        setCurrentIndex((p: number) => {
            const newPosition = p + 1
            if(newPosition >= cubeColors.length){
                onGameOver()
                return 0
            } 
            return newPosition
        });
        setFeintPos(Math.floor(Math.random() * 16));
    }

    useEffect(() => {
        if (time <= 0) {
            onGameOver()
            return;
        }

        const timer = setTimeout(() => setTime(p => p - 1), 1000);
        return () => clearTimeout(timer);
    }, [time])

    useEffect(() => {
        initGame();
    }, [])

    return{
        gameOver,
        time,
        qStatus,
        feintPos,
        cubeColors,
        currentIndex,
        score,
        isHighScore,
        resetGame,
        validate
    }
}