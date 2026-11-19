import { useAuth } from "@/contexts/AuthProvider";
import { styles } from "@/styles";
import { LogOut } from "lucide-react-native";
import React, { useState } from "react";
import { ActivityIndicator, Platform, TouchableOpacity, View } from "react-native";
import Logo from "./Logo";

export default function Header(){
    const [loading, setLoading] = useState(false);
    const {logout} = useAuth()
    return (
        <View style = {[styles.header,
            styles.flexRow,
            styles.justifyBetween,
        Platform.OS === "ios" ? styles.iosShadow : styles.androidShadow]}>
            <Logo/>
            <View style = {[styles.selfCenter]}>
                <TouchableOpacity onPress={()=>{
                    setLoading(true)
                    logout()
                    setLoading(false);
                }}>
                    {
                        loading ?
                        <ActivityIndicator size={12} color={styles.bg_danger.backgroundColor} />:
                        <LogOut size={18}/>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}