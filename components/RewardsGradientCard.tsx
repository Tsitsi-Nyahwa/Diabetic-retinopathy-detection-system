import { styles } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

interface props {
    fullname : string
    totalScore : number,
    level: string
}
export default function RewardsGradientCard({totalScore, level, fullname }: props){
    return(
        <LinearGradient
            colors={["#f83600", "#fe8c00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 7.5 }}
        >
            <View style = {[styles.linearGradient, styles.relative]}>
                <View style = {[styles.flexRow, {gap : 5}]}>
                    {
                        fullname &&
                        <Text style = {[styles.h5, styles.text_white, styles.fontBold]}>Level:</Text>
                    }
                    <Text style = {[styles.h5, styles.text_white, styles.fontBold]}>{fullname ? level : "Select User"}</Text>
                </View>
                {
                    fullname &&
                    <Text style = {[styles.p, styles.text_white]}>Welcome back {fullname}</Text>
                    
                }
                <View style = {[styles.flexRow, styles.justifyBetween]}>
                    <Text style = {[styles.p, styles.text_white]}>Progress to your next level</Text>
                    <Text style = {[styles.p, styles.text_white]}>{`${totalScore} / 3600 XP`}</Text>
                </View>
                <View style = {[{marginTop : 7}]}>
                    <View style = {[styles.loaderContainer, styles.w100]}> 
                        <View style = {[styles.loader, {
                            width : `${(Number(totalScore) / 3600) * 100}%`
                        }]}></View>
                    </View>
                </View>
            </View>

        </LinearGradient>
    )
}