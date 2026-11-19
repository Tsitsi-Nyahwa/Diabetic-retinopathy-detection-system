import GameOver from '@/components/GameOver'
import useColorCube from '@/hooks/useColorCube'
import { styles } from '@/styles'
import { Boxes, Check, X } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated"


const ColorCube = () => {
  const {
    gameOver,
    time,
    qStatus,
    cubeColors,
    feintPos,
    currentIndex,
    score,
    isHighScore,
    validate,
    resetGame,
  } = useColorCube()

  if (gameOver) {
    return <GameOver isHighscore = {isHighScore} outOf={1000} score={score} onRestart={resetGame} />;
  }

  return (
    <View style={[styles.screen]}>
      <View style={[styles.container]}>
        <View style={[styles.w100, styles.h100, styles.centerItems]}>

          <View style={[styles.flexRow, styles.centerItems, { gap: 5, marginBottom: 15 }]}>
            <Boxes color={styles.bg_purple.backgroundColor} size={18} />
            <Text style={[styles.h5]}>Pick the feint color</Text>
          </View>

          <View style={[styles.centerItems, styles.flexColumn, styles.w100, { marginBottom: 5 }]}>
            <Text style={[styles.h6]}>Score: {score} pts</Text>
            <Text style={[styles.text_danger]}>{time}s remaining</Text>
          </View>

          <View style={[{ marginBottom: 15 }]}>
            {qStatus.correct ?
              <Animated.View entering={ZoomIn} exiting={ZoomOut}>
                <Check color={styles.text_success.color} size={20} />
              </Animated.View>
              : qStatus.wrong ?
                <Animated.View entering={ZoomIn} exiting={ZoomOut}>
                  <X color={styles.bg_danger.backgroundColor} size={20} />
                </Animated.View>
                : <></>
            }
          </View>

          <View style={[styles.w100, styles.flexRow, styles.flexWrap, { gap: 5 }]}>
            {cubeColors.length !== 0 &&
              [...Array(16)].map((_, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => validate(index)}
                  style={[
                    styles.cube,
                    {
                      backgroundColor: index === feintPos
                        ? cubeColors[currentIndex].feintColor
                        : cubeColors[currentIndex].mainColor
                    }
                  ]}
                />
              ))
            }
          </View>
        </View>
      </View>
    </View>
  )
}

export default ColorCube
