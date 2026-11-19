import AIRecommendationCard from '@/components/AIRecommendationCard'
import Alert from '@/components/Alert'
import AnalysisIndicator from '@/components/AnalysisIndicator'
import Header from '@/components/Header'
import PickImage from '@/components/PickImage'
import Pill from '@/components/Pill'
import { useCamera } from '@/contexts/CameraContext'
import useScan from '@/hooks/useScan'
import { styles } from '@/styles'
import { Check, ImageIcon } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View ,ScrollView} from 'react-native'
import { SEVERITY_LEVELS } from '@/constants';

const DetectImage = () => {
  const {photoUri, setPhotoUri} = useCamera()
  const {
    loading ,
    results,
    recommendations,
    error,
    retakeImage
  } = useScan()

  return (
    <View style = {[styles.screen]}>
      <Header/>
      <ScrollView>
        <View style = {[styles.container]}>
          {
            !photoUri ? 
            <PickImage/> : 
            <Image
              style={[
                styles.w100,
                { aspectRatio: 4 / 3,
                  resizeMode: "contain",
                  borderRadius : 7.5
                }
              ]}
              source={{ uri: photoUri }}
            />
          }
        </View>
        {
          photoUri ?
          <View style = {{paddingInline : 25}}>
            <AnalysisIndicator
            loading = {loading}/>
            <View style = {[styles.flexColumn,styles.mTop10, {gap : 10}]}>
              {
                error.length !== 0 ?
                <Alert variant='danger' message={error}/> : 
                <View style = {[styles.flexColumn, {gap  :15}]}>
                  <View style = {[styles.card]}>
                    <View style={[styles.flexRow, { gap: 5, marginBottom: 15 }]}>
                      <Check color={styles.bg_purple.backgroundColor} style = {[styles.selfCenter]} size={18} />
                      <Text style={[styles.h5]}>Diagnosis Summary</Text>
                    </View>
                    <View style = {[styles.flexColumn, {gap: 5}]}>
                        <View style= {[styles.flexRow, styles.justifyBetween]}>
                          <Text style = {[styles.h6]}>Severity Level</Text>
                          <Pill label={results.class} variant={SEVERITY_LEVELS[results.class as keyof typeof SEVERITY_LEVELS]}/>
                        </View>
                        <View style= {[styles.flexRow, styles.justifyBetween]}>
                          <Text style = {[styles.h6]}>Confidence Threshold:</Text>
                          <Text style = {[styles.h6, styles.text_success]}>{String(results.confidence.toFixed(2))}%</Text>
                        </View>
                    </View> 
                  </View>
                  {
                    recommendations.map((r, idx)=>
                      <AIRecommendationCard key={idx} recommendation={r}/>
                    )
                  }
                </View>
              
              }
              <TouchableOpacity disabled = {loading} style = {[styles.button, !loading ? styles.bg_purple : styles.bg_purple_30, {marginBottom : 15}]} onPress={()=>retakeImage()}>
                <View style = {[styles.w100, styles.flexRow, styles.centerItems,{gap : 5}]}>
                    <ImageIcon size={15} color={"white"}/>
                    <Text style = {[styles.btnText, styles.text_white]}>Reselect Image</Text>
                </View>
              </TouchableOpacity>
            </View>          
          </View>:
          <></>
        }
      </ScrollView>
    </View>
  )
}

export default DetectImage
