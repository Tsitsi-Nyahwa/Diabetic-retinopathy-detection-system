import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles'
import { HeartPlus, Plus } from 'lucide-react-native'

interface props{
    displayButton?:boolean
    onBTNPress? : ()=> void
}

export default function EmptyPatients({displayButton, onBTNPress}:props){
    return (
        <View style = {[styles.h50, styles.card, styles.centerItems, styles.flexColumn, {gap : 10}]}>
            <HeartPlus size={35} color={styles.bg_mute.backgroundColor}/>
            <Text style = {[styles.p, styles.text_mute]}>No patients added yet</Text>
            
            {
                displayButton &&
                <TouchableOpacity onPress={()=>onBTNPress?.()} style = {[styles.button, styles.bg_purple, {gap : 10}]}>
                    <Plus size={15} color={styles.bg_white.backgroundColor} style = {styles.selfCenter}/>
                    <Text style ={[styles.buttonText, styles.text_white]}>Add Patient</Text>
                </TouchableOpacity>
            }
        </View>
    )
}