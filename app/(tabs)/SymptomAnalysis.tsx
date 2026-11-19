import Header from '@/components/Header'
import useSymptom from '@/hooks/useSymptoms'
import { styles } from '@/styles'
import { BotMessageSquare, Send } from 'lucide-react-native'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Markdown from "react-native-markdown-display";

const SymptomAnalysis = () => {
  const {
    text,
    messages,
    loading,
    sendSymptom,
    setText,
  } = useSymptom();
  return (
    <View style = {[styles.screen]}>
      <Header/>
        <ScrollView>
          <View style = {styles.container}>
              <View style = {[styles.flexRow, {gap : 5}]}>
                <BotMessageSquare color={styles.bg_purple.backgroundColor} size={18}/>
                <Text style = {[styles.selfCenter, styles.h6, styles.fontSemiBold]}>Symptom Analysis</Text>
              </View>
              <View style = {[styles.mTop10]}>
                <View style = {[styles.flexRow, styles.justifyBetween]}>
                  <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder='e.g My eyes are hot and red'
                    style = {[styles.defaultInput, styles.w70]}
                    multiline

                  />
                  <TouchableOpacity disabled = {loading} onPress={sendSymptom} style = {[styles.button, !loading ? styles.bg_success : styles.bg_success_30, styles.selfCenter]}>
                      {
                        loading ?
                        <ActivityIndicator size={15} color={"white"}/>:
                        <Send size={18} color={styles.bg_white.backgroundColor}/>

                      }
                  </TouchableOpacity>
                </View>

                <View style = {[styles.mTop10, styles.flexColumn, {gap : 10, paddingBottom : 15}]}>
                      {
                        messages.map((m, idx)=>{
                          if (m.from === "client") {
                            return (
                              <View key={idx} style = {[styles.justifyEnd, styles.w100]}>
                                  <View style = {[styles.userMessage, ]}>
                                      <Text style = {[styles.p, {fontSize:10 }]}>{m.message} </Text>
                                  </View> 
                                </View>
                            )
                          } else{
                            return(
                              <View key={idx} style = {[styles.justifyStart, styles.w100]}>
                                <Markdown
                                  style={{
                                    body: {
                                      paddingVertical : 10,
                                      paddingInline : 15,
                                      borderTopRightRadius : 20,
                                      borderBottomRightRadius : 20,
                                      borderBottomLeftRadius : 20,
                                      borderWidth :0.9,
                                      fontFamily: "Poppins-Medium",
                                      fontSize: 10,
                                      backgroundColor : "#e9fff1ff",
                                      borderColor  :"#16a34a",   
                                    }
                                  }}
                                >
                                  {m.message}
                                </Markdown>
                              </View>
                            )
                          }
                        })
                      }
                </View>            
              </View>
          </View>
        </ScrollView>

    </View>
  )
}

export default SymptomAnalysis