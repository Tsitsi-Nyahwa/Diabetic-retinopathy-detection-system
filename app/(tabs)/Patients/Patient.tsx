import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles'
import Header from '@/components/Header'
import PatientGradientCard from '@/components/PatientGradientCard'
import { Camera, Phone, ScanEye } from 'lucide-react-native'
import HealthCard from '@/components/HealthCard'
import Pill from '@/components/Pill'
import usePatient from '@/hooks/usePatient'
import { BASE_URL } from '@/api'
import AIRecommendationCard from '@/components/AIRecommendationCard'
import { SEVERITY_LEVELS } from '@/constants';

const Patient = () => {
  const {
    id,
    router,
    patient,
    screenRecord,
  } =usePatient()
  return (
    <View style = {[styles.screen]}>
      <Header/>
      <ScrollView>
        <View style = {[styles.container]}>
          <PatientGradientCard
            name={patient?.fullname ?? "-"}
            age={String(patient?.age) ?? "-"}
            diabetes_type= {patient?.diabetic_type ?? "-"}
            pregnancy_status={patient?.pregnancy_status ?? "-"}
          />
          <HealthCard
            lastGlucose={patient?.blood_sugar === undefined ? "-" : String(patient.blood_sugar)}
            hba1c= {patient?.hba1c === undefined ? "-" : String(patient.hba1c)}
          />
          <View style = {[styles.card, styles.mTop10]}>
            <View style = {[styles.flexRow, {gap: 15}]}>
              <Phone size={15} style = {styles.selfCenter} color={styles.bg_purple.backgroundColor}/>
              <Text style = {[styles.h6, styles.fontSemiBold]}>Contact Information</Text>
            </View>
            <View style = {[styles.mTop10]}>
              <Text style = {[styles.p]}>Phone</Text>
              <Text style = {[styles.h6]}>{patient?.phone ?? "-"}</Text>
            </View>
            <View style = {[styles.mTop10]}>
              <Text style = {[styles.p]}>Email</Text>
              <Text style = {[styles.h6]}>{patient?.email ?? "-"}</Text>
            </View>
          </View>

          <View style = {[styles.card, styles.mTop10, styles.flexColumn, {gap : 10}]}>
            {
              screenRecord?.image &&
              <Image 
                style={[
                  styles.w100,
                  { aspectRatio: 4 / 3,
                    resizeMode: "contain",
                    borderRadius : 7.5
                  }
                ]}
                source={{ uri:  `${BASE_URL}/api/image/${screenRecord.image}`}}/>
            }
            <View style = {[styles.flexRow, {gap: 15}]}>
              <ScanEye size={15} style = {styles.selfCenter} color={styles.bg_amber.backgroundColor}/>
              <Text style = {[styles.h6, styles.fontSemiBold]}>Last Screening</Text>
            </View>
            <View style = {[styles.flexRow, styles.justifyBetween]}>
              <Text style = {[styles.p]}>Last Screening</Text>
              <Text style = {[styles.p, styles.fontBold]}>{patient?.last_screening ?? "-"}</Text>
            </View>
            <View style = {[styles.flexRow, styles.justifyBetween]}>
              <Text style = {[styles.p]}>Previous Result</Text>
              <Pill label={screenRecord?.class ?? "-"} variant={SEVERITY_LEVELS[screenRecord?.class as keyof typeof SEVERITY_LEVELS ?? "success"]}/>

            </View>
            <View style = {[styles.flexRow, styles.justifyBetween]}>
              <Text style = {[styles.p]}>Confidence</Text>
              <Text style = {[styles.h6, styles.text_success]}>
                {screenRecord?.confidence !== undefined && screenRecord?.confidence !== null
                  ? `${(Number(screenRecord.confidence) * 100).toFixed(2)}%`
                  : "-"}
              </Text>
            </View>
          </View>
          <View style = {[styles.flexColumn, {gap : 15, marginTop : 15}]}>
            {
              screenRecord?.recommendations &&
              screenRecord.recommendations.map((r, idx)=>(
                  <AIRecommendationCard recommendation={r} key={idx}/>
              ))
            }
          </View> 

          <TouchableOpacity onPress={()=> router.push({
            pathname : "/(tabs)/Patients/DetectImage",
            params: {
              id : id
            }
          })} style = {[styles.button, styles.bg_success, styles.flexRow, styles.centerItems, styles.mTop10, {gap : 10}]}>
            <Camera size={15} color={"white"}/>
            <Text style = {[styles.text_white, styles.buttonText]}>Conduct New Screening</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Patient