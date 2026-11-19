
import { useAuth } from '@/contexts/AuthProvider'
import { User } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const useGetStarted = () => {
    const router = useRouter()
    const {login} = useAuth()
    const [loading, setLoading] = useState(false)
    
    const getStarted = async () => {
        setLoading(true);
        try {
            const userStr = await AsyncStorage.getItem("USER");
            if (!userStr) {
            router.push("/(auth)/Login");
            return;
            }

            const parsedUser: User = JSON.parse(userStr);
            await login(parsedUser);
            router.push("/(tabs)/Dashboard");
        } catch (err) {
            console.log(err);
            router.push("/(auth)/Login");
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        router,
        getStarted
    }
}

export default useGetStarted