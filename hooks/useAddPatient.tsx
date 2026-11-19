import { useApis } from "@/api"
import { useIncreaseCounter } from "@/contexts/IncreaseCounter"
import { AxiosError, isAxiosError } from "axios"
import { useState } from "react"

export default function useAddPatient(onSuccessCallback : ()=>void){
    const {increase} = useIncreaseCounter()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({
        status: "",
        error : ""
    });
    const [formData, setFormData] = useState({
        diabetic_type : "",
        fullname : "",
        age : "",
        phone : "",
        email : "",
        hba1c : "",
        blood_sugar : "",
        pregnancy_status : "No"
    })
    
    const [errors, setErrors] = useState({
        diabetic_type : "",
        fullname : "",
        age : "",
        phone : "",
        email : "",
        hba1c : "",
        blood_sugar : "",
        pregnancy_status : ""
    })
    const {api} = useApis()

    const handleChange = (key:string, value:string)=>{
        setFormData((p)=>({
            ...p,
            [key] : value
        }))
    }

    const updateDiabeticTypes = (value:any) =>{
        setFormData((p)=>({
            ...p,
            diabetic_type : value.value
        }))
    }

    const validate = () => {
        let valid = true
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        const newErrors = {
            diabetic_type : "",
            fullname : "",
            age : "",
            phone : "",
            email : "",
            hba1c : "",
            blood_sugar : "",
            pregnancy_status : ""
        }

        Object.keys(newErrors).forEach((key) => {
            const value = formData[key as keyof typeof formData]
            if (!value || value.toString().trim() === "") {
                newErrors[key as keyof typeof newErrors] = "This field is required"
                valid = false
            }
        })
        
        setErrors(newErrors)
        if(!emailRegex.test(formData.email)){
            valid = false
            setErrors((p)=>({
                ...p,
                email : "Invalid Email Provided"
            }))
        }
        return valid
    }

    const onSuccess = async(data: any) =>{
        setStatus((p)=>({...p, status : data.message}))
        onSuccessCallback()
        increase()
    }

    const onError =async(error: AxiosError | Error )=>{
        if(isAxiosError(error)){
            const message = error.response?.data.message ?? "Something went wrong";
            setStatus((p)=>({
                ...p,
                error : message
            }));
        }else {
            setStatus((p) => ({
            ...p,
            error: "Network Error",
            }));
        }
    }

    const handleSubmit = () => {
        const f = validate()
        if(!f) {return false}
        
        setLoading(true);
        const PAYLOAD = {
            ...formData
        }
       
        const request =  api().put("/api/patients", PAYLOAD);
        request
            .then((res) => res.data)
            .then(onSuccess)
            .catch(onError)
            .finally(() => setLoading(false));
    }

    return {
        status,
        errors,
        loading,
        formData, 
        updateDiabeticTypes,
        handleSubmit,
        handleChange,
    }
}