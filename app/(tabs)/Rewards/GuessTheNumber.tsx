import GameOver from '@/components/GameOver'
import useGuessNumber from '@/hooks/useGuessNumber'
import { styles } from '@/styles'
import { Check, Sigma, X } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated"

const GuessTheNumber = () => {
  const {
    questions,
    currentPos,
    qStatus,
    gameOver,
    score,
    time,
    isHighScore,
    validate,
    reset
  } = useGuessNumber()
  
  if(gameOver){
    return (
      <GameOver isHighscore = {isHighScore} outOf={900} score={score} onRestart={reset}/>
    )
  }

  return (
    <View style = {[styles.screen]}>
      <View style = {[styles.container, styles.flexColumn, styles.centerItems, styles.w100, styles.h100]}>
          <View>
            <View style = {[styles.flexRow, {gap : 5, marginBottom : 10}]}>
              <Sigma color={styles.bg_amber.backgroundColor} size={18}/>
              <Text style = {[styles.h6, styles.fontSemiBold]}>Enter the number in the image</Text>
            </View>
            <Text style = {[styles.textCenter, styles.h6, styles.text_success]}>{score} pts</Text>
            <Text style = {[styles.textCenter, styles.p, styles.text_danger]}>{time}s remaining</Text>
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
          
          <View style = {[styles.mTop10, styles.w100, styles.flexColumn, styles.centerItems,{gap : 25}]}>
              <Image
                source={questions?.[currentPos]?.image  ?? ""}
                style={{
                  width: 150,     
                  height: 150,    
                  resizeMode: "cover",
                }}
                alt='image'
              />
              <View style = {[styles.w100, styles.flexRow, styles.justifyEvenly]}>
                {
                  questions?.[currentPos]?.options.map((p, idx)=>(
                    <TouchableOpacity onPress={()=>validate(p)} key={idx} style = {[styles.guess, styles.bg_amber]}>
                      <Text style = {[styles.h6, styles.text_white]}>{p}</Text>
                    </TouchableOpacity>
                  ))
                }
                </View>
          </View>
      </View>
    </View>
  )
}

export default GuessTheNumber