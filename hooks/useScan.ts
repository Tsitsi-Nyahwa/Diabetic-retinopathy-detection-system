import { useApis } from '@/api';
import { useCamera } from '@/contexts/CameraContext';
import { useIncreaseCounter } from '@/contexts/IncreaseCounter';
import { AIRecommendation, PredictionResult } from '@/types';
import { isAxiosError } from 'axios';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ToastAndroid } from 'react-native';

export default function useScan(){
  const { id } = useLocalSearchParams<{ id: string}>()
  const {fileApi} = useApis()
  const {setPhotoUri, photoUri} = useCamera()  
  const [loading, setLoading] = useState(false)
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([])
  const [error, setError] = useState("")
  const {increase} = useIncreaseCounter()
  const [results, setResults] = useState<PredictionResult>({
    class : "",
    confidence : 0
  })
  const navigator = useNavigation()

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
    
  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({shutterSound :false});
      if(photo){
      setPhotoUri(photo.uri);
      navigator.goBack();
      }
    }
  }
  
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      ToastAndroid.show("Permission to access gallery is required!", ToastAndroid.BOTTOM)
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };
  
  const detect = async () => {
    if (!photoUri) return;

    setLoading(true)
    const formData = new FormData();
    formData.append("patient_id", String(id))
    formData.append("file", {
      uri: photoUri,
      name: `photo_${Date.now()}.jpg`,
      type: "image/jpeg",
    } as any);

    fileApi().post("/api/detect", formData)
    .then((response) => response.data)
    .then(data =>{
      if(data.success){ 
        setRecommendations(data.recommendations)
        setResults({
          confidence : Number(data.confidence * 100),
          class : String(data.class)
        })
        increase()
      }
    })
    .catch(error =>{
      if(isAxiosError(error)){
        const message = error.response?.data.message ?? "Something went wrong";
        setError(message)
      } else {
        setError("Network error.")
      }
    }).finally(()=> setLoading(false))
  };

  const retakeImage = () => {
    setPhotoUri(undefined)
    setResults({
      class : "",
      confidence : 0
    })
    setRecommendations([])
    setError("")
  }

  useEffect(()=>{detect()}, [photoUri])

  return {
    facing,
    permission,
    cameraRef,
    loading,
    error,
    results,
    recommendations,
    pickImage,
    retakeImage,
    requestPermission,
    toggleCameraFacing,
    takePhoto,
  }
}