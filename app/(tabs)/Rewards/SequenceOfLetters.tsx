import GameOver from "@/components/GameOver";
import useSequenceOfLetters from "@/hooks/useSequenceOfLetters";
import { styles } from "@/styles";
import { CaseUpper, Check, X } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";


export default function SequenceLettersGame() {
  const{
    gameOver,
    questions,
    currentIndex,
    score,
    selected,
    showResult,
    timeLeft,
    isHighScore,
    resetGame,
    handleSelect,
  } = useSequenceOfLetters()

  if (gameOver) {
    return <GameOver 
      score={score} 
      outOf={1000}
      isHighscore = {isHighScore}
      onRestart={resetGame} />;
  }

  if (questions.length === 0) {
    return (
      <View style={[styles.screen, styles.centerItems]}>
        <Text style={styles.h4}>Loading...</Text>
      </View>
    );
  }

  const current = questions[currentIndex];
  return (
    <View style={[styles.screen]}>
      <View style = {[styles.container, styles.h100, styles.centerItems, styles.w100]}>
        <View style = {[styles.flexRow, styles.centerItems, {gap : 5, marginBottom : 10}]}>
          <CaseUpper color={"#f83600"} size={18} />
          <Text style = {[styles.h5]}>Select a correct sequence</Text>
        </View>
        <Text style={[styles.h4, styles.textCenter,{ marginBottom: 15 }]}>
          Q. {currentIndex + 1} / {questions.length}
        </Text>
        <Text style={[styles.h2, styles.fontSemiBold, styles.textCenter,{ marginBottom: 20 }]}>
          {current.sequence}
        </Text>

        <Text style={[{ marginBottom: 15 }, styles.textCenter]}>⏳ Time Left: {timeLeft}s</Text>

        {current.options.map((opt, idx) => {
          const isSelected = selected === opt.option;
          const isCorrect = opt.isCorrect && selected !== null;
          const isWrong = isSelected && !opt.isCorrect;

          return (
            <TouchableOpacity
              key={idx}
              disabled={selected !== null}
              style={[
                styles.w100,
                styles.buttonOutline,
                {marginBottom : 15},
                isCorrect && { backgroundColor: "#c2ffd8ff" },
                isWrong && { backgroundColor: "#ffc5c5ff" },
              ]}
              onPress={() => handleSelect(opt)}
            >
              <View style={[styles.flexRow, styles.justifyBetween]}>
                <Text style={[styles.p, styles.fontSemiBold]}>{opt.option}</Text>
                {showResult && isCorrect && (
                  <Animated.View entering={ZoomIn} exiting={ZoomOut}>
                    <Check color = {styles.text_success.color} size={20} />
                  </Animated.View>
                )}
                {showResult && isWrong && (
                  <Animated.View entering={ZoomIn} exiting={ZoomOut}>
                    <X color={"red"} size={20} />
                  </Animated.View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
