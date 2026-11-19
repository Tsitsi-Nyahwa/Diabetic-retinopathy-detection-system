import { useApis } from "@/api";
import { Patient, ScreenRecord } from "@/types";
import { isAxiosError } from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";

export default function usePatient(){
    const {api} = useApis()
    const { id } = useLocalSearchParams<{ id: string}>()
    const [patient, setPatient] = useState<Patient>()
    const router = useRouter()
    const [screenRecord, setScreenRecord] = useState<ScreenRecord>()

    const getPatient = () =>{
        api().get(`/api/patient?id=${id}`)
        .then(response => response.data)
        .then(data =>{
            if(data.success){
                setPatient(data.patient)
                setScreenRecord(data.latest_test)
            }
        })
        .catch((error)=>{
            const message = isAxiosError(error)
            ? error.response?.data?.error || error.message || "Something went wrong."
            : "Something went wrong.";
            ToastAndroid.show(message, ToastAndroid.SHORT);
        })
    }

    useEffect(()=> {getPatient()}, [])
    return{
        id,
        router,
        patient,
        screenRecord,
    }
}