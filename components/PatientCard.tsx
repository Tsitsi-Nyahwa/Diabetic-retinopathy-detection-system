import Pill from '@/components/Pill'
import { styles } from '@/styles'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRouter, usePathname } from 'expo-router'
import {  PatientMini } from '@/types'

interface props {
  patient : PatientMini
}

function PatientCard({patient}:props) {
  const router = useRouter()
  const pathname = usePathname();
  
  return (
    <TouchableOpacity onPress={()=> {
      if (pathname.startsWith("/Patients")) {
        router.push({
          pathname : "/Patients/Patient",
          params : {
            id : patient.id
          }
      })
    } else {
      router.push({
        pathname: "/Patients/PatientsLists",
        params: { load: patient.id },
      });
    }
  }} style = {[ styles.bg_white ,styles.testCard, styles.flexRow]}>
        <View style = {[styles.w100]}>
            <View style = {[styles.flexRow, styles.justifyBetween]}>
              <Text style = {[styles.h6]}>{patient.full_name}</Text>
                <Pill label='NO DR'/>
            </View>
            <Text style = {[styles.p, {fontSize : 10}]}>{patient.blood_sugar} • {patient.age} years  • {patient.diabetic_type} </Text>
            <Text style = {[styles.p, {fontSize : 10}]}>Last Screening: {patient.last_screening}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PatientCard
