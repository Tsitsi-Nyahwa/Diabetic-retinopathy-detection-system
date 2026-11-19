import { LETTERS } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";

const useFocusShift = () => {
    const [letter, setLetter] = useState("A");
    const [seconds, setSeconds] = useState(0);
  
    const scale = useRef(new Animated.Value(1)).current;
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    useEffect(() => {
      const loopAnimation = () => {
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.5, 
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 0.3, 
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]).start(({ finished }) => {
          if (finished) {
            const randIndex = Math.floor(Math.random() * LETTERS.length);
            setLetter(LETTERS[randIndex]);
            loopAnimation();
          }
        });
      };
      loopAnimation();
    }, [scale]);
  
  
    const barWidths = [ 19, 17, 15, 13, 11, 9, 7, 5, 3, 1,1,1,1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  
    return {
      letter,
      seconds,
      scale,
      barWidths,
  }
    
}

export default useFocusShift