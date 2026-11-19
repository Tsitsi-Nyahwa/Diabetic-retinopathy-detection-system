import { BADGES, ColorCube, FocusShift, GuessTheNumber, OddOneOut, SequenceOfLetters } from '@/constants';
import { useRefreshRewardsCounter } from '@/contexts/RewardsContext';
import { Badge, PatientGamePoints, PatientMini, Points } from '@/types';
import { getRankTitle } from '@/utils';
import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';
import { useApis } from '@/api';
import { ToastAndroid } from 'react-native';
import { isAxiosError } from 'axios';

function useRewards() {
  const [badges, setBadges] = useState<Badge[]>(BADGES);
  const [points, setPoints] = useState<Points>({} as Points);
  const [totalScore, setTotalScore] = useState(0);
  const [level, setLevel] = useState("")
  const { selectedPatient, loadPatient, clearPatient } = useRefreshRewardsCounter();
  const [searchValue, setSearchValue] = useState("")
  const [lock, setLock] = useState(true)
  const [show, setShow] = useState(false)
  const [patients, setPatients] = useState<PatientGamePoints[]>([])
  const debouncedSearch =  useDebounce(searchValue, 300)
  const {api} = useApis()

  const getPatients = () => {
    if (!debouncedSearch.trim()) return;

    const URL =`/api/search-patient/rewards?search=${debouncedSearch}`       
    api()
    .get(URL)
    .then((response) => response.data)
    .then((data) => {
        if (data.success) {
          setShow(true)
          setPatients(data.results);
        }
    })
    .catch((error) => {
        const message = isAxiosError(error)
        ? error.response?.data?.error || error.message || "Something went wrong."
        : "Something went wrong.";
        ToastAndroid.show(message, ToastAndroid.SHORT);
    })
  };

  useEffect(()=>{getPatients()}, [debouncedSearch])
  useEffect(()=>{
    if(selectedPatient === undefined){
      setLock(true)
    } else { 
      setLock(false)
    }
  }, [selectedPatient])

  useEffect(()=>{
    if(selectedPatient === undefined) return;
    const updatedPoints: Points = {
      "Color Cube": selectedPatient.games[ColorCube] ?? 0,
      "Focus Shift": 0,
      "Guess the number": selectedPatient.games[GuessTheNumber]?? 0,
      "Odd one out": selectedPatient.games[OddOneOut] ?? 0,
      "Sequence of Letters": selectedPatient.games[SequenceOfLetters] ?? 0,
    };

    const badgeThresholds: Record<string, number> = {
      "Color Cube": 800,
      "Guess the number": 700,
      "Odd one out": 500,
      "Sequence of Letters": 800,
    };

    setBadges(prevBadges =>
      prevBadges.map(badge => {
        if (badge.game === "Focus Shift") return badge; 
        const threshold = badgeThresholds[badge.game];
        const score = updatedPoints[badge.game] ?? 0;
        return {
          ...badge,
          achieved: score >= threshold,
        };
      })
    );

    const total = Object.entries(updatedPoints)
      .filter(([game]) => game !== "Focus Shift")
      .reduce((sum, [, score]) => sum + score, 0);

    setPoints(updatedPoints);
    setTotalScore(total);
    setLevel(getRankTitle(total))
  }, [selectedPatient])
  
  const onSelectPatient =(patient:PatientGamePoints) => {
    setShow(false)
    loadPatient(patient)
    setSearchValue("")
  }
  
  const reset = () => {
    setShow(false)
    clearPatient()
    setSearchValue("")
    setLevel("")
    setPoints({} as Points)
    setBadges(BADGES)
  }
  return {
    lock,
    show, 
    level,
    badges,
    points,
    patients,
    totalScore,
    searchValue,
    selectedPatient,
    onSelectPatient,
    setSearchValue,
    setShow,
    reset,
  };
}

export default useRewards;
