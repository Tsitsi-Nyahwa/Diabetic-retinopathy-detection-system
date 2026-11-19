import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/styles'
import type { LucideIcon } from 'lucide-react-native'

interface props {
    label : string,
    value : string,
    Icon: LucideIcon,
    color : "blue" | "success"
}

const DashboardCard = ({label, value, Icon, color}: props) => {
  return (
<View style = {[styles.w40, styles.card]}>
            <View style = {[styles.w100, styles.flexRow, {gap: 10}]}>
                <Icon size={15} style = {styles.selfCenter} color={color === "blue" ? styles.bg_blue.backgroundColor : styles.bg_success.backgroundColor}/>
                <Text style = {[styles.h6]}>{label}</Text>
            </View>
            <Text style = {[styles.h2, color === "blue" ?  styles.text_blue : styles.text_success]}>{value}</Text>
        </View>
  )
}

export default DashboardCard