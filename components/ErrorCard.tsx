import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/styles'
import { TriangleAlert } from 'lucide-react-native'
interface props {
    error : string
}
export default function ErrorCard({error}:props){
    return (
         <View style = {[styles.h50, styles.card, styles.centerItems, styles.flexColumn, {gap : 10}]}>
            <TriangleAlert size={35} color={styles.bg_danger.backgroundColor}/>
            <Text style = {[styles.h6, styles.text_danger]}>{error}</Text>
        </View>
    )
}