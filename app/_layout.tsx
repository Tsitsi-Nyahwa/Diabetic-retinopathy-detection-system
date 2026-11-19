
import { AuthProvider } from "@/contexts/AuthProvider";
import { IncreaseCounterProvider } from "@/contexts/IncreaseCounter";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from 'react';

const RootLayout = () => {
    const [loaded] = useFonts({
        "Poppins-Regular" : require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
        "Poppins-Medium" : require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Poppins-SemiBold" : require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-Bold" : require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    })

    if (!loaded) return null

    return (
        <AuthProvider>
            <IncreaseCounterProvider>
                <React.Fragment>
                    <Stack screenOptions={{headerShown : false}} initialRouteName="index">
                        <Stack.Screen name="(tabs)"/>
                        <Stack.Screen name="(auth)/Login"/>
                        <Stack.Screen name="(auth)/Register"/>
                        <Stack.Screen name = "index"/> 
                    </Stack>
                    <StatusBar style={"dark"}/>
                </React.Fragment>
            </IncreaseCounterProvider>
        </AuthProvider>
    )
}

export default RootLayout