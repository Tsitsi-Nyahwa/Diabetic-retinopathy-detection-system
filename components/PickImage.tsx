import useScan from '@/hooks/useScan'
import { styles } from '@/styles'
import { useRouter } from 'expo-router'
import { Camera } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
function PickImage() {
    const router = useRouter()
    const {pickImage} = useScan()

    return (
        <View style = {[styles.scanImageContainer, styles.dashedBorder, styles.h20, styles.mTop10]}> 
          <Camera color={styles.p.color} size={35}/>
          <Text style = {[styles.p, styles.mTop10]}>Take a photo or upload from gallery</Text>
          <View style ={[styles.flexRow, styles.justifyBetween, styles.mTop10]}>
              <TouchableOpacity onPress={()=>router.navigate("/(tabs)/Patients/CameraScreen")} style = {[styles.normalButtonSM, styles.bg_success]}>
                <Text style = {[styles.buttonText]}>Take a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={pickImage} style = {[styles.normalButtonSM, styles.bg_blue, {marginLeft : 10}]}>
                <Text style = {[styles.buttonText]}>Upload from Gallery</Text>
              </TouchableOpacity>
          </View>
        </View>
  )
}

export default PickImage
