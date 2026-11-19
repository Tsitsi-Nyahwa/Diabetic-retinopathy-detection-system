import GameOver from '@/components/GameOver'
import useOddOneOut from '@/hooks/useOddOneOut'
import { styles } from '@/styles'
import { Check, CircleArrowDownIcon, X } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated"

const OddOneOut = () => {
  const {
    cPos,
    score,
    time,
    gameOver,
    qStatus,
    questions,
    oddPos,
    isHighScore,
    reset,
    validate
  } = useOddOneOut()

  if(gameOver){
    return <GameOver outOf={700} isHighscore = {isHighScore} score={score} onRestart={reset}/>
  }

  return (
    <View style = {[styles.screen]}>
      <View style = {[styles.container, styles.flexColumn, styles.centerItems, styles.w100, styles.h100]}>
        <View>
            <View style = {[styles.flexRow, {gap : 5, marginBottom : 10}]}>
              <CircleArrowDownIcon color={styles.bg_blue.backgroundColor} size={18}/>
              <Text style = {[styles.h6, styles.fontSemiBold]}>Pick the odd one out</Text>
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

          <View>
            <View style = {[styles.flexWrap, styles.flexRow, styles.justifyEvenly, {gap: 15}]}>
              { 
                questions.length > 0 &&
                [... Array(20)].map((_, idx)=>(
                  <TouchableOpacity key={idx} onPress={()=> validate(idx)} >
                    <Image
                      source={idx === oddPos ?
                        questions?.[cPos].OD :
                        questions?.[cPos].OG
                      }
                      style = {{
                        objectFit : "contain",
                        width : 65,
                        height  : 65        
                      }}
                    />  
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>
      </View>
    </View>
  )
}

export default OddOneOut