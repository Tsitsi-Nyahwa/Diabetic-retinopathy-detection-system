import Logo from '@/components/Logo'
import useGetStarted from '@/hooks/useGetStarted'
import { styles } from '@/styles'
import HERO from "@/styles/hero.png"
import React from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'

const GetStarted = () => {
  const  { 
    loading,
    router,
    getStarted} = useGetStarted()
  return (
    <View style = {[styles.screen]}>
      <View style = {[styles.container, styles.flexColumn, styles.centerItems]}>
          <Image
            source={HERO}
            style = {[{
              width : 400,
              height : 400,
              resizeMode : "center"
            }]}
          />
          <View style = {[styles.w100, styles.flexColumn, styles.centerItems, {gap: 15}]}>
            <Logo/>
            <Text style = {[styles.p]}>Detect Early, Live Clearly</Text>
            <View style = {[styles.flexRow, {gap : 5}]}>
              <TouchableOpacity onPress={()=> router.push("/(auth)/Register")} style = {[styles.buttonOutline]}>
                <Text style = {[styles.h6]}>Register Hospital</Text>
              </TouchableOpacity>
              <TouchableOpacity disabled = {loading} onPress={()=>getStarted()} style = {[styles.button, !loading ? styles.bg_success : styles.bg_success_30]}>
                {
                  loading ?
                  <ActivityIndicator color={"white"} /> :
                  <Text style = {[styles.h6, styles.text_white]}>Sign in</Text>
                }
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
  )
}

export default GetStarted