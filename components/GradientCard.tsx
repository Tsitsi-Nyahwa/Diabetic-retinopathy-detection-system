import { HelloWave } from '@/components/hello-wave'
import { styles } from '@/styles'
import { LinearGradient } from "expo-linear-gradient"
import { Crown, Trophy } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'

interface props {
    clientName : string,
}

function GradientCard({clientName}: props) {
  return (
    <View style={[styles.w100]}>
        <LinearGradient
            colors={["#8935c5ff", "#e7499f"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 7.5 }}
        >
            <View style={[styles.linearGradient]}>
                <View>
                    <Text key={clientName} style = {[styles.h3, styles.fontBold, styles.text_white]}>
                    Welcome back, {clientName}
                    <HelloWave/>
                    </Text>
                    <Text style = {[styles.p,{marginTop : 5} ,styles.text_white]}>
                    Hospital Diabetic Retinopathy Screening System
                    </Text>
                </View>
            </View>
        </LinearGradient>
    </View>
  )
}

export default GradientCard
