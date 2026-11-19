
import { RefreshDashboardProvider } from '@/contexts/RefetchDashboard';
import { styles } from '@/styles';
import { Tabs } from 'expo-router';
import { LayoutDashboard, Sparkles, Trophy, User, Users } from "lucide-react-native";
import React from 'react';

export default function TabLayout() {
  return (
    <RefreshDashboardProvider>
      <Tabs initialRouteName='Dashboard' screenOptions={{
        headerShown : false,
        tabBarActiveTintColor : styles.bg_success.backgroundColor}}>
        <Tabs.Screen 
          name='SymptomAnalysis'
          options={{
            title : "Symptom Analysis",
            tabBarIcon :({color})=>{
              return (
                <Sparkles color={color} size= {18}/>
              )
            }
          }}
        />
        <Tabs.Screen 
          name='Patients'
          options={{
            title : "Patients",
            tabBarIcon : (({color}) => <Users color={color} size= {18}/>)
          }}
        />
        <Tabs.Screen 
          name='Dashboard'
          options={{
            title : "Dashboard",
            tabBarIcon: (({color}) => <LayoutDashboard color={color} size= {18}/>)
          }}
        />
        <Tabs.Screen 
          name='Rewards'
          options={{
            title : "Rewards",
            tabBarIcon : (({color})=> <Trophy color={color} size= {18}/>)            
          }}
        />
        <Tabs.Screen 
          name='Profile'
          options={{
            title : "Profile",
            tabBarIcon: (({color}) => <User color={color} size= {18}/>)
          }}
        />
      </Tabs>
    </RefreshDashboardProvider>
  );
}
