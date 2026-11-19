import { CameraProvider } from "@/contexts/CameraContext";
import { Stack } from "expo-router";
import React from "react";

export default function Layout(){
    return (
        <CameraProvider>
            <Stack screenOptions={{headerShown : false}} initialRouteName="PatientsLists">
                <Stack.Screen name="PatientsLists"/>
                <Stack.Screen name="Patient"/>
                <Stack.Screen name="CameraScreen"/>
                <Stack.Screen name="DetectImage"/>
            </Stack>
        </CameraProvider>
    )
}