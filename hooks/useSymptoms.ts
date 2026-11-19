import { useApis } from "@/api";
import { isAxiosError } from "axios";
import { useState } from "react";
import { ToastAndroid } from "react-native";

export default function useSymptom (){
    const [text, setText]= useState("")
    const [messages, setMessages] = useState<{from: "client" | "AI_service", message: string}[]>([])
    const [loading, setLoading] = useState(false)
    const {api} = useApis()

    const sendSymptom = () =>{
        if (!text.trim()) return;

        setLoading(true)
        setMessages((p)=>[{
            from : "client",
            message: text
        }, ...p])
        setText("")
        api()
        .post("/api/symptom", {message : text})
        .then(response => response.data)
        .then(data=>{
            if(data.success){
                setMessages((p)=>[{
                    from : "AI_service",
                    message: data.message
                }, ...p])
            }
        })
        .catch((error)=>{
            const message = isAxiosError(error)
            ? error.response?.data?.error || error.message || "Something went wrong."
            : "Something went wrong.";
            ToastAndroid.show(message, ToastAndroid.SHORT);
        })
        .finally(()=> setLoading(false))
    }

    return {
        text,
        messages,
        loading,
        sendSymptom,
        setText,

    }
}