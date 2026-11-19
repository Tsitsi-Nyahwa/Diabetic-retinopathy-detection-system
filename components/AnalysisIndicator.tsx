import { styles } from '@/styles'
import { PredictionResult } from '@/types'
import { CheckCircle } from 'lucide-react-native'
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

interface props {
  loading :  boolean
}

export default function AnalysisIndicator({loading}: props){
  return (
    <View style = {[styles.imageLoader,styles.flexColumn, styles.w100, styles.bg_white]}>
      {
        loading ? 
        <ActivityIndicator 
          size={50}
          color={styles.bg_purple.backgroundColor}
        /> :
        <View style = {styles.centerItems}>
          <CheckCircle size={50} color={styles.bg_success.backgroundColor}/>
        </View>
      }
      {
        loading ? 
        <View style = {[styles.flexColumn]}>
          <Text style = {[styles.h5, styles.textCenter]}>Analyzing image...</Text>
          <Text style = {[styles.p, styles.textCenter]}>AI is processing your retinal scan</Text>
        </View>:
        <Text style = {[styles.text_success, styles.h5, styles.textCenter]}>Analysis Complete</Text>
      }
    </View>
  )
}