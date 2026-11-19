import { SEQUENCE_LETTERS, SequenceOfLetters } from "@/constants";
import { useRefreshRewardsCounter } from "@/contexts/RewardsContext";
import type { Option } from "@/types";
import {  shuffleArray } from "@/utils";
import { useCallback, useEffect, useState } from "react";

const useSequenceOfLetters = () => {
  
    const [questions, setQuestions] = useState<typeof SEQUENCE_LETTERS>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5);
    const [gameOver, setGameOver] = useState(false);
    const [isHighScore, setIsHighScore] = useState(false);
    const {savePoint} = useRefreshRewardsCounter();
    useEffect(() => {
        const shuffled = shuffleArray(SEQUENCE_LETTERS);
        setQuestions(shuffled.slice(0, 10));
    }, []);

    useEffect(() => {
        if (gameOver || selected !== null) return;

        if (timeLeft === 0) {
        handleNext(false);
        return;
        }

        const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, selected, gameOver]);

    const handleSelect = (option: Option) => {
        if (selected !== null) return; 
        setSelected(option.option);

        if (option.isCorrect) {
        setScore((s) => s + 100); 
        }

        setShowResult(true);

        setTimeout(() => {
        handleNext(option.isCorrect);
        }, 1000);
    };

    const handleNext = useCallback(
        (correct: boolean) => {
        setSelected(null);
        setShowResult(false);
        setTimeLeft(5);

        if (currentIndex + 1 >= questions.length) {
            savePoint(SequenceOfLetters, score)
            setGameOver(true);
        } else {
            setCurrentIndex((i) => i + 1);
        }
        },
        [currentIndex, questions.length]
    );

    const resetGame = () => {
        const shuffled = [...SEQUENCE_LETTERS].sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, 10));
        setCurrentIndex(0);
        setScore(0);
        setTimeLeft(5);
        setSelected(null);
        setGameOver(false);
    };

    return{
        gameOver,
        questions,
        currentIndex,
        score,
        showResult,
        timeLeft,
        selected,
        isHighScore,
        resetGame,
        handleNext,
        handleSelect,

    }
}

export default useSequenceOfLetters