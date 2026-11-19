import DashboardCard from '@/components/DashboardCard'
import EmptyPatients from '@/components/EmptyPatients'
import ErrorCard from '@/components/ErrorCard'
import GradientCard from '@/components/GradientCard'
import Header from '@/components/Header'
import LoadingIndicator from '@/components/LoadingIndicator'
import PatientCard from '@/components/PatientCard'
import useDashboard from '@/hooks/useDashboard'
import usePatientList from '@/hooks/usePatientsLists'
import { styles } from '@/styles'
import {  Calendar, ScanEye, Users } from 'lucide-react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Dashboard = () => {
  const {loading, patients, error} = usePatientList("dashboard")
  const {clientName, stats} = useDashboard()

  return (
    <View style = {styles.screen}>
      <Header/>
      <ScrollView>
        <View style = {[styles.container]}>
          <GradientCard
            clientName={clientName}
          />
          <View style = {[styles.mTop10, styles.w100, styles.flexRow, styles.justifyBetween]}>
            <DashboardCard
              label="Patients"
              Icon={Users}
              value={stats.numberOfPatients}
              color='blue'
            />
            <DashboardCard
              label="Total Screens"
              Icon={ScanEye}
              value={stats.totalScans}
              color='success'
            />
          </View>
      
          <View style = {[{marginTop : 10}]}>
            <View style = {[styles.flexRow, {gap: 10}]}>
              <Calendar color={styles.text_purple.color} size={15} style = {styles.selfCenter}/>
              <Text style = {[styles.selfCenter, styles.h5, styles.fontSemiBold]}>Recent Tests</Text>
            </View>
            <View style = {[styles.flexColumn, styles.mTop10, {gap : 13}]}>
              { loading && <LoadingIndicator/> }
              {
                patients.length !== 0 &&
                patients.map((patient)=> <PatientCard patient={patient} key={patient.id}/> )
              }
              {
                error?.length > 0 && !loading && 
                <ErrorCard error={error}/>
              }
              {
                !loading && patients.length === 0 && error?.length <= 0 &&
                <EmptyPatients displayButton= {false}/>
              }
             
            </View>
           
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Dashboard