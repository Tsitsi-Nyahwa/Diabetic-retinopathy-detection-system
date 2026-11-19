import useScan from '@/hooks/useScan';
import { styles } from '@/styles';
import { CameraView } from 'expo-camera';
import { SwitchCamera } from 'lucide-react-native';
import { Button, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const {
    facing,
    permission,
    cameraRef,
    requestPermission,
    toggleCameraFacing,
    takePhoto 
  } = useScan()
  
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style = {[styles.screen]}>
        <View style={styles.container}>
          <Text style={styles.h5}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      </View>
    );
  }
  
  return (
    <View style={styles.cameraContainer}>
      <CameraView ref = {cameraRef} style={styles.camera} facing={facing} />
      <View style={styles.buttonContainer}>
        <View></View>
         <TouchableOpacity onPress={()=>takePhoto()}  style = {{marginLeft : 15}}>
            <View style = {[styles.shutterBorder]}>
              <View>
                <View style = {[styles.shutter]}></View>
              </View>
            </View>
        </TouchableOpacity>
        <View style = {[styles.selfCenter]}>
          <TouchableOpacity onPress={toggleCameraFacing}>
            <SwitchCamera color={"white"}/>
          </TouchableOpacity>
        </View>
       
       
      </View>
      
    </View>
  );
}
