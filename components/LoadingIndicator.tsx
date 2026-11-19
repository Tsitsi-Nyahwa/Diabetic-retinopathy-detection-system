import { styles } from '@/styles'
import { View, Text, ActivityIndicator } from 'react-native'

export default function LoadingIndicator(){
    return (
        <View style = {[styles.card, styles.h20, styles.flexColumn, {gap : 15},styles.centerItems]}>
            <ActivityIndicator color={styles.bg_purple.backgroundColor}/>
            <Text style ={[styles.p]}>Loading...</Text>
        </View>
    )
}