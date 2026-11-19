import { useApis } from "@/api"
import { useAuth } from "@/contexts/AuthProvider"
import { RegisterValidationErrors } from "@/types"
import { isAxiosError } from "axios"
import { useRouter } from "expo-router"
import { useState } from 'react'

const useRegister = () => {
    const {login} = useAuth()
    const {api} = useApis()
    const router = useRouter()
    const [hospitalName, setHospitalName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState<RegisterValidationErrors>({ 
        hospitalName: [], 
        email: [], 
        password: [], 
        confirmPassword: [] 
    })
    const [isValidating, setIsValidating] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const validateHospitalName = (name: string): string[] => {
        const errors: string[] = []
        
        if (!name.trim()) {
        errors.push('Hospital Name is required')
        } else if (name.trim().length < 2) {
        errors.push('Full name must be at least 2 characters')
        } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        errors.push('Full name can only contain letters and spaces')
        }
        
        return errors
    }

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
        
        if (password.length < 8) {
        errors.push('Password must be at least 8 characters long')
        }
        
        if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter')
        }
        
        if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter')
        }
        
        if (!/\d/.test(password)) {
        errors.push('Password must contain at least one number')
        }
        
        return errors
    }

    const validateConfirmPassword = (confirmPassword: string, password: string): string[] => {
        const errors: string[] = []
        
        if (!confirmPassword) {
        errors.push('Please confirm your password')
        } else if (confirmPassword !== password) {
        errors.push('Passwords do not match')
        }
        
        return errors
    }

    const handleHospitalNameChange = (text: string) => {
        setHospitalName(text)
        if (isValidating) {
        setErrors(prev => ({
            ...prev,
            hospitalName: validateHospitalName(text)
        }))
        }
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
        if (isValidating) {
        setErrors(prev => ({
            ...prev,
            password: validatePassword(text),
            confirmPassword: validateConfirmPassword(confirmPassword, text)
        }))
        }
    }

    const handleChangeAddress = (text: string)=>{
        setAddress(text)
    }

    const handleConfirmPasswordChange = (text: string) => {
        setConfirmPassword(text)
        if (isValidating) {
        setErrors(prev => ({
            ...prev,
            confirmPassword: validateConfirmPassword(text, password)
        }))
        }
    }

    const validateForm = (): boolean => {
        const hospitalNameErrors = validateHospitalName(hospitalName)
        const emailErrors = validateEmail(email)
        const passwordErrors = validatePassword(password)
        const confirmPasswordErrors = validateConfirmPassword(confirmPassword, password)
        setErrors({
            hospitalName: hospitalNameErrors,
            email: emailErrors,
            password: passwordErrors,
            confirmPassword: confirmPasswordErrors
        })
        
        return (
            hospitalNameErrors.length === 0 && 
            emailErrors.length === 0 && 
            passwordErrors.length === 0 && 
            confirmPasswordErrors.length === 0
        )
    }

    const handleCreateAccount = () => {
        setIsValidating(true)
        
        if (validateForm()) {
            setLoading(true)
            const PAYLOAD = {
                "hospital_name" :  hospitalName, 
                "address" : address,
                "email" : email,
                "password" : password
            }
            api().put("/api/auth", PAYLOAD)
            .then(data => data.data)
            .then(async(data) => {
                if(data?.user){
                    await login(data?.user)
                    router.navigate("/(tabs)/Dashboard")
                }
            })
            .catch((error)=>{
                const message = 
                isAxiosError(error) ?
                error.response?.data.message : "Something went wrong"
                setError(message)
            })
            .finally(()=> setLoading(false))
        } 
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return {
        showConfirmPassword,
        confirmPassword,
        isValidating,
        showPassword,
        password,
        hospitalName,
        address,
        loading,
        errors,
        error,
        email,
        handleEmailChange,
        handleChangeAddress,
        handleCreateAccount,
        handlePasswordChange,
        handleHospitalNameChange,
        togglePasswordVisibility,
        handleConfirmPasswordChange,
        toggleConfirmPasswordVisibility,

    }
}

export default useRegister