import { styles } from '@/styles'
import { Heart } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'

interface props {
    lastGlucose : string,
    hba1c : string 
}

function HealthCard({lastGlucose, hba1c}:props) {
  return (
    <View style = {[styles.healthCard]}>
        <View style = {[styles.flexRow, {gap : 15}]}>
            <Heart color={"red"} size={15}/>
            <Text style = {[styles.h6, styles.fontSemiBold]}>Healthy Summary </Text>
        </View>
        <View style = {[styles.flexRow, styles.mTop10, {gap : 75}]}>
            <View style = {[styles.flexColumn, {gap : 0}]}>
            <Text style = {[styles.p]}>Last Glucose</Text>
            <Text style = {[styles.h3, styles.text_blue, styles.fontBold]}>{lastGlucose} mg/dL</Text>
            </View>
            <View style = {[styles.flexColumn, {gap : 0}]}>
            <Text style = {[styles.p]}>HbA1c</Text>
            <Text style = {[styles.h3, styles.text_success, styles.fontBold]}>{hba1c}%</Text>
            </View>
        </View>
    </View>
  )
}

export default HealthCard
