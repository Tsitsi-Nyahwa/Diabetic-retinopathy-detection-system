import { useApis } from "@/api";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";

export default function useProfile(){
    const {api} = useApis()
    const [profile,setProfile] = useState({
        name: "",
        email : "",
        address : ""
    })

    const getProfile = () => {
        api().get("/profile")
        .then(data=> data.data)
        .then(data =>{
            if(data.success){
                setProfile({
                    name : data.profile.name,
                    email : data.profile.email,
                    address : data.profile.address
                })   
            }
        })
        .catch(error=> {
            const message = 
            isAxiosError(error) ?
            error.response?.data : "Something went wrong fetching profile"
            ToastAndroid.show(message, ToastAndroid.BOTTOM)
        })
    }

    useEffect(()=>{
        getProfile()
    }, [])
    
    return {
        profile
    }
}