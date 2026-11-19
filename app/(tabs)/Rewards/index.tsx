import Header from '@/components/Header'
import RewardsGradientCard from '@/components/RewardsGradientCard'
import { GAMES } from '@/constants'
import useRewards from '@/hooks/useRewards'
import { styles } from '@/styles'
import { useRouter } from 'expo-router'
import { Award, Badge, ChevronRight, Joystick, X } from 'lucide-react-native'
import React from 'react'
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
const RewardsScreen = () => {
  const {
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
  } = useRewards() 

  const router = useRouter();
  return (
    <View style = {[styles.screen]}>
      <Header/>
      <ScrollView>
        <View style = {[styles.container]}>
          <RewardsGradientCard 
            level={level}
            fullname = {selectedPatient?.fullname ?? ""}
            totalScore = {totalScore}
          />
          <View style = {[styles.flexColumn, styles.relative]}>
            <View style = {[styles.flexRow, styles.justifyBetween, {marginTop : 15}]}>
              <View style = {[styles.w75, ]}>
                <TextInput
                  placeholder='Search by name ...'
                  style = {[styles.defaultInput]}
                  value= {searchValue}
                  //onBlur={()=> setShow(false)}
                  onChangeText={setSearchValue}
                />
              </View>
              <View style = {[styles.w10]}>
                <TouchableOpacity onPress={()=>reset()} style = {[styles.buttonOutline, styles.centerItems]}>
                    <X size={15} color={styles.bg_mute.backgroundColor}/>
                </TouchableOpacity>
              </View>      
            </View>
            {
              show && 
              <View style = {[
                styles.absolute, 
                styles.card,
                styles.w100,
                styles.results,
                Platform.OS === "ios" ? styles.iosShadow : styles.androidShadow
              ]}>
                {
                  patients.length === 0 ?
                  <TouchableOpacity style = {[styles.result]} disabled = {true}>
                    <Text style = {[styles.p, styles.textCenter]}>No patients found</Text>
                  </TouchableOpacity>: 
                  patients.map((patient, idx: number)=> 
                  <TouchableOpacity key={patient.id} onPress={()=> onSelectPatient(patient)} style = {[styles.result, idx !== patients.length - 1 && styles.optionBB]}>
                    <Text style = {[styles.p, styles.textCenter]}>{patient.fullname}</Text>
                  </TouchableOpacity>
                  )
                }
              </View>    
            }
          </View>
          <View style = {[ styles.card, styles.badges]}>
            <View style = {[styles.flexRow, {gap : 5}]}>
              <Badge color={styles.bg_purple.backgroundColor} size={18}/>
              <Text style = {[styles.selfCenter, styles.h6, styles.fontSemiBold]}>Achieved Badges</Text>
            </View>
            <View style = {[styles.w100, styles.flexRow, styles.flexWrap, styles.justifyEvenly, {marginTop : 20, gap : 5,}]}>
                {
                  badges?.map((badge)=>(
                    <View key={badge.slug} style = {[styles.flexColumn, {gap:5}, styles.centerItems]}>
                      <Award 
                        size={30}
                        color={ badge.achieved ? styles.bg_amber.backgroundColor : styles.bg_mute.backgroundColor}/>
                      <Text style = {[
                        styles.fontSemiBold,
                        {
                          fontSize : 10,
                          color : !badge.achieved ?
                          styles.p.color :
                          styles.h6.color
                        }
                      ]} >{badge.badgeName}</Text>
                    </View>
                  ))
                }
            </View>
          </View>
          
          <View style = {[styles.games, styles.card, styles.bg_white]}>
              <View style = {[styles.flexRow, {gap : 10, marginBottom : 10}]}>
                <Joystick color={styles.bg_purple.backgroundColor} size={18}/>
                <Text style = {[styles.selfCenter, styles.h6, styles.fontSemiBold]}>Games and quizzes</Text>
              </View>
              {
                GAMES.map((game, index:number)=>(
                  <TouchableOpacity 
                    key={game.name} 
                    disabled = {lock}
                    style = {[styles.option, index !== GAMES.length - 1 && styles.optionBB]}
                    onPress={()=>{router.navigate(game.page as any)}}
                    >
                    <View style = {[styles.flexRow, styles.justifyBetween]}>
                        <View style = {[styles.flexRow, {gap : 15}]}>
                          <game.Icon color={game.color} style = {[styles.selfCenter]}  size={18}/>
                          <View style = {[styles.flexColumn,]}>
                            <Text style = {[styles.h6, styles.selfCenter]}>{game.name}</Text>
                            {
                            game?.total ?
                            <Text style={[styles.p, { color: styles.bg_mute.backgroundColor }]}>
                              {`${points?.[game.name] ?? 0} / ${game.total} pts`}
                            </Text> :<></>
                            }
                          </View>
                        </View>
                        <ChevronRight size={15} style = {[styles.selfCenter]}/>
                    </View>
                  </TouchableOpacity>
                ))
              }
          
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default RewardsScreen