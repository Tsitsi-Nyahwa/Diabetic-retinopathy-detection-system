import { styles } from "@/styles";
import { EyeIcon } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Logo(){
    return (
        <View style = {[styles.flexRow]}>
            <View style = {[styles.logoIconContainer]}>
                <EyeIcon color={"white"} size={18}/>
            </View>
            <Text style = {[styles.h5, styles.fontSemiBold, styles.selfCenter, {marginLeft : 7}]}>
                Retinal Care
            </Text>
        </View>
    )
}