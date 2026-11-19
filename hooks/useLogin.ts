import { useApis } from "@/api"
import { useAuth } from "@/contexts/AuthProvider"
import { LoginValidationErrors } from '@/types'
import { isAxiosError } from "axios"
import { router } from "expo-router"
import { useState } from 'react'

const useLogin = () => {
    const  {login} = useAuth()
    const {api} = useApis()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState<LoginValidationErrors>({ email: [], password :[]})
    const [isValidating, setIsValidating] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const validateEmail = (email: string): string[] => {
        const errors: string[] = []
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        if (!email.trim()) {
        errors.push('Email is required')
        } else if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address')
        }
        
        return errors
    }

    const validatePassword = (password: string): string[] => {
    const errors: string[] = []
    
    if (!password) {
      errors.push('Password is required')
      return errors
    }
    
    return errors
  }
    const handleEmailChange = (text: string) => {
        setEmail(text)
        if (isValidating) {
        setErrors(prev => ({
            ...prev,
            email: validateEmail(text)
        }))
        }
    }

    const handlePasswordChange = (text: string) => {
        setPassword(text)
    }

    const validateForm = (): boolean => {
        const emailErrors = validateEmail(email)
        const passwordErrors = validatePassword(password)

        setErrors({
            email: emailErrors,
            password: passwordErrors
        })
        
        return emailErrors.length === 0 && passwordErrors.length === 0
    }

    const handleLogin = () => {
        setIsValidating(true)
        if (!validateForm()) {
            setIsValidating(false);
            return;
        }

        setLoading(true)
        api().post("/api/auth", {
            email : email,
            password : password
        })
        .then(async(data)=>{
            if(data.status === 200){
                await login(data?.data?.user)
                router.replace("/(tabs)/Dashboard")
            }   
        })
        .catch(error=>{
            if(isAxiosError(error)){
                const message = error.response?.data.message ?? "Something went wrong";
                setError(message)
            }
        })
        .finally(()=> {
            setIsValidating(false)
            setLoading(false);
            setTimeout(()=>{setError("")}, 3500)
        })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return {
        email,
        password,
        showPassword,
        errors,
        isValidating,
        loading,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        togglePasswordVisibility
    }
}

export default useLogin