import { styles } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

interface props {
    name : string,
    age: string,
    diabetes_type :  string,
    pregnancy_status : string
}
export default function PatientGradientCard({
    name,
    age,
    diabetes_type,
    pregnancy_status
}:props){
    return (
        <LinearGradient
            colors={["#016b07ff", "#05eb10ff"]}
            start={{ x: 0.1, y: 0.2 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 7.5 }}
        >
        <View style = {[styles.linearGradient]}>
           <View style = {[styles.flexColumn, {gap : 1}]}>
            <Text style = {[styles.h3, styles.fontBold, styles.text_white]}>{name}</Text>
           </View>
           <View style = {[styles.flexRow, styles.justifyBetween, styles.mTop10]}>
            <View style = {[styles.flexColumn]}>
                <Text style = {[styles.p, styles.text_white]}>Age</Text>
                <Text style = {[styles.h6, styles.text_white, styles.fontSemiBold]}>{age} Years</Text>
            </View>
             <View style = {[styles.flexColumn]}>
                <Text style = {[styles.p, styles.text_white]}>Diabetes Type</Text>
                <Text style = {[styles.h6, styles.text_white, styles.fontSemiBold]}>{diabetes_type}</Text>
            </View>
             <View style = {[styles.flexColumn]}>
                <Text style = {[styles.p, styles.text_white]}>Pregnancy Status</Text>
                <Text style = {[styles.h6, styles.text_white, styles.fontSemiBold]}>{pregnancy_status}</Text>
            </View>
           </View>
        </View>    
    </LinearGradient>
    )
}