import { AuthContextType, User } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    
    const login = async(userData: User) => {
        const user_ = JSON.stringify(userData)
        const timestamp = new Date().getTime();
        await AsyncStorage.setItem("LOGIN_TIMESTAMP", timestamp.toString());
        await AsyncStorage.setItem("USER", user_)
        setUser(userData)
    };
    
        const router = useRouter();

    const logout = async () => {
        try {
            await AsyncStorage.multiRemove([
                "USER",
                "LOGIN_TIMESTAMP",
            ]);

            setUser(null);
            router.replace("/(auth)/Login"); 
        }
        catch (error) {
            console.error("Logout failed:", error);
        }
    };
    const getClient = ():User | null => {return user}  
    const checkAutoLogout = async () => {
        const timestampStr = await AsyncStorage.getItem("LOGIN_TIMESTAMP");
        if (!timestampStr) return;

        const loginTime = parseInt(timestampStr, 10);
        const now = new Date().getTime();
        const fiveDaysMs = 5 * 24 * 60 * 60 * 1000;

        if (now - loginTime >= fiveDaysMs) {
            logout();
        }
    };

    useEffect(()=>{checkAutoLogout()}, [])
    return (
        <AuthContext.Provider value={{ user, login, logout, getClient }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
