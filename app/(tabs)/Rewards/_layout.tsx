import { RewardsProvider } from "@/contexts/RewardsContext";
import { Stack } from "expo-router";
import React from "react";

export default function Layout(){
    return (
    <RewardsProvider>
        <Stack screenOptions={{headerShown : false}}/>
    </RewardsProvider>
)}