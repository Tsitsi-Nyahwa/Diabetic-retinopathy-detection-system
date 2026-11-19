import { GuessTheNumber, IMAGES_GUESS } from '@/constants'
import { useRefreshRewardsCounter } from '@/contexts/RewardsContext'
import { GuessNumberImages } from '@/types'
import { saveScore, shuffleArray } from '@/utils'
import { useEffect, useState } from 'react'


const useGuessNumber = () => {
    const [questions,setQuestions] = useState<GuessNumberImages[]>([]); 
    const [currentPos, setCurrentPos] = useState(0)
    const [time, setTime] = useState(10);
    const [qStatus, setQStatus] = useState({ correct: false, wrong: false })
    const [gameOver, setGameOver] = useState(false)
    const [isHighScore, setIsHighScore] = useState(false)
    const [score, setScore] = useState(0)
    const {savePoint} = useRefreshRewardsCounter();

    useEffect(() => {
        const shuffled = shuffleArray(IMAGES_GUESS) 
        setQuestions(shuffled.slice(0, 10));
    }, []);
    


    useEffect(()=>{
        if (time === 0 ){
            onGameOver()
            return
        }
        const timer = setTimeout(() => setTime((t) => t - 1), 1000);
        return () => clearTimeout(timer);  
    },[time])

    function onGameOver(){
        setGameOver(true)
        savePoint(GuessTheNumber, score)
    }

    function validate(value: number){
        if(value === questions?.[currentPos]?.value){
            setScore(p => p + 100)
            setQStatus({
                correct : true,
                wrong : false
            })
        } else{
            setQStatus({
            correct : false,
            wrong : true
        })
        }
        setCurrentPos((p)=> {
            const newPosition = p + 1
            if(newPosition >= questions?.length){
                onGameOver()
                return 0
            } 
            return newPosition
        })
    }

    function reset(){
        setQStatus({correct: false, wrong : false})
        setGameOver(false)
        setScore(0)
        setCurrentPos(0)
        setTime(10)
    }


  return {
    questions,
    currentPos,
    qStatus,
    gameOver,
    score,
    time,
    isHighScore,
    validate,
    reset
  }
}

export default useGuessNumber