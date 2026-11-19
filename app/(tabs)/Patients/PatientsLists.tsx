import { View, Text, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '@/styles'
import Header from '@/components/Header'
import { BoxesIcon, HeartOffIcon, HeartPlus, Plus, Search, X } from 'lucide-react-native'
import usePatientList from '@/hooks/usePatientsLists'
import PatientCard from '@/components/PatientCard'
import Modal from '@/components/Modal'
import AddPatientForm from '@/forms/AddPatientForm'
import EmptyPatients from '@/components/EmptyPatients'
import ErrorCard from '@/components/ErrorCard'
import LoadingIndicator from '@/components/LoadingIndicator'

const PatientsLists = () => {
  const {
    open,
    error,
    loading,
    patients,
    pagination,
    searchValue,
    setSearchValue,
    increasePage,
    onSuccess,
    setOpen,
    reset
  } = usePatientList()
  return (
    <View style ={[styles.screen]}>
      <Header/>
      {
        open &&
        <Modal closeModal={()=> {setOpen(false)}} headerTitle='Add Patient'>
          <View style = {[styles.w100, styles.h100]}>
            <AddPatientForm onSuccessCallback = {onSuccess}/>
          </View>
        </Modal>
      }
      
      <ScrollView>
          <View style = {[styles.container]}>
            <View style = {[styles.flexRow, styles.justifyBetween]}>
              <Text style = {[styles.h5, styles.selfCenter, styles.fontSemiBold]}>Patient Registry</Text>
              <TouchableOpacity onPress={()=>setOpen(true)} style = {[styles.button, styles.bg_purple, {gap : 10}]}>
                <Plus size={15} color={styles.bg_white.backgroundColor} style = {styles.selfCenter}/>
                <Text style ={[styles.buttonText, styles.text_white]}>Add Patient</Text>
              </TouchableOpacity>
            </View>
            <View style = {[styles.flexRow, styles.justifyBetween, {marginTop : 15}]}>
              <View style = {[styles.w75, ]}>
                <TextInput
                  placeholder='Search by name ...'
                  style = {[styles.defaultInput]}
                  value= {searchValue}
                  onChangeText={setSearchValue}
                />
              </View>
              <View style = {[styles.w10]}>
                <TouchableOpacity onPress={()=>reset()} style = {[styles.buttonOutline, styles.centerItems]}>
                    <X size={15} color={styles.bg_mute.backgroundColor}/>
                </TouchableOpacity>
              </View>          
            </View>
            <View style = {[styles.flexColumn, styles.mTop10, {gap : 15}]}>
              { loading && patients.length === 0 && <LoadingIndicator/> }
              {
                patients.length !== 0 &&
                !loading &&
                <View style = {[styles.flexColumn, {gap : 15}]}>
                  {
                    patients.map((patient)=> <PatientCard patient={patient} key={patient.id}/> )
                  }
              <TouchableOpacity 
                onPress={pagination?.has_next ? () => increasePage() : undefined} 
                style={{ marginTop: 15 }}
              >
                <Text style={[styles.h6, { color: pagination?.has_next ? "#555" : "#aaa" }, styles.fontBold, styles.textCenter]}>
                  {pagination?.has_next ? "Load More" : "No More Patients"}
                </Text>
              </TouchableOpacity>
                </View>
              }
              {
                error?.length > 0 && !loading && 
                <ErrorCard error={error}/>
              }
              {
                !loading && patients.length === 0 && error?.length <= 0 &&
                <EmptyPatients displayButton= {true} onBTNPress={()=>setOpen(true)}/>
              }
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default PatientsLists