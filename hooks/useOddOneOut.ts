import { IMAGES_ODD, OddOneOut } from '@/constants'
import { useRefreshRewardsCounter } from '@/contexts/RewardsContext'
import { Odd } from '@/types'
import {  shuffleArray } from '@/utils'
import { useEffect, useState } from 'react'

export default function useOddOneOut(){
    const [questions, setQuestions] = useState<Odd[]>([])
    const [cPos, setCPos] = useState(0);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(15)
    const [gameOver, setGameOver] = useState(false);
    const [qStatus, setQStatus] = useState({ correct: false, wrong: false })
    const [oddPos, setOddPos] = useState(0);
    const [isHighScore, setIsHighScore] = useState(false)
    const {savePoint} = useRefreshRewardsCounter();
    function randomizeOddPosition(){
        setOddPos(Math.floor(Math.random() * 19));
    }
    function init(){
        const shuffled = shuffleArray(IMAGES_ODD)
        console.log(shuffled)
        setQuestions(shuffled)
        randomizeOddPosition();
    }
    function onGameOver(){
        setGameOver(true)
        savePoint(OddOneOut, score)
    }
    useEffect(() => { 
        if (time <= 0) {
           onGameOver()
            return;
        }

        const timer = setTimeout(() => setTime(p => p - 1), 1000)
        return () => clearTimeout(timer)
    }, [time])

    useEffect(()=>{init()},[])

    function validate(idx: number){
        if(idx === oddPos){
        setQStatus({ correct: true, wrong: false })
        setScore(p => p + 100)
        } else {
        setQStatus({ correct: false, wrong: true })
        }

        setCPos((p) => {
            const newPosition = p + 1
            if(newPosition >= questions?.length){
                onGameOver()
                return 0
            } 
            return newPosition
        })
        randomizeOddPosition()
    }

    function reset(){
        setCPos(0)
        setScore(0)
        setTime(15)
        setGameOver(false)
        setQStatus({correct: false, wrong : false})
        init()
    }

    return {
        cPos,
        score,
        time,
        gameOver,
        qStatus,
        isHighScore,
        questions,
        oddPos,
        reset,
        validate
    }
}