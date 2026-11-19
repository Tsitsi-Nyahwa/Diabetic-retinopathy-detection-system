import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthProvider'
import useProfile from '@/hooks/useProfile'
import { styles } from '@/styles'
import { getInitials } from '@/utils'
import { ChevronRight, Heart, LogOut, ScanHeart } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Profile = () => {
  const {profile}  =  useProfile()
  const {logout} = useAuth()  
  return (
    <View style = {[styles.screen]}>
      <Header/>
      <View style = {[styles.container]}>

        <View style = {[styles.profileContainer]}>
          <View style = {[styles.flexRow, {gap: 10}]}>
            <View style = {[styles.initialsContainer, styles.bg_purple, styles.flexColumn, styles.centerItems]}>
              <Text style  ={[styles.h4, styles.text_white]}>{getInitials(profile.name)}</Text>
            </View>
            <View style = {[styles.flexColumn]}>
              <Text style = {[styles.h5]}>{profile.name}</Text>
              <Text style = {[styles.p]}>{profile.email}</Text>
            </View>
          </View>
          <View style = {[styles.mTop10, styles.flexColumn, {gap: 15}]}>
              <View style = {[styles.justifyBetween, styles.flexRow]}>
                <View style = {[styles.flexColumn, styles.w45]}>
                  <Text style = {[styles.p]}>Address</Text>
                  <Text style = {[styles.h6]}>{profile.address.length === 0 ? "N/A" : profile.address}</Text>
                </View>

              </View>
          </View>
        </View>
        <View style = {[styles.screenOptions, styles.w100]}>
          <TouchableOpacity style = {[styles.option]} onPress={()=> logout()}>
            <View style = {[styles.flexRow, styles.justifyBetween]}>
                <View style = {[styles.flexRow, {gap : 15}]}>
                  <LogOut color={styles.bg_amber.backgroundColor} style = {[styles.selfCenter]}  size={18}/>
                  <Text style = {[styles.h6, styles.selfCenter]}>Log out</Text>
                </View>
                <ChevronRight size={15} style = {[styles.selfCenter]}/>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default Profile