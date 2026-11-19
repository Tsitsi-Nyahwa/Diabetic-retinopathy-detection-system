import { useApis } from '@/api'
import { useAuth } from '@/contexts/AuthProvider'
import { useIncreaseCounter } from '@/contexts/IncreaseCounter'
import { isAxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ToastAndroid } from 'react-native'

const useDashboard = () => {
  const {api} = useApis()
  const { getClient } = useAuth()
  const {value} = useIncreaseCounter()
  const [stats,setStats] = useState({
    numberOfPatients : "",
    totalScans: ""
  })
  const [clientName, setClientName] = useState(
    () => getClient()?.hospital_name ?? "-"
  )

  const getDashboardStats = () =>{
    api()
    .get("/api/dashboard")
    .then(response => response.data)
    .then(data =>{
      if(data.success){
        setStats({
          numberOfPatients : String(data.total_patients),
          totalScans : String(data.total_tests)
        })
      }
    })
    .catch((error)=>{
      const message = isAxiosError(error)
      ? error.response?.data?.error || error.message || "Something went wrong."
      : "Something went wrong.";
      ToastAndroid.show(message, ToastAndroid.SHORT);
    })
  }

  useEffect(()=> {
    getDashboardStats()
  }, [value])
  
  useEffect(() => {
    setClientName(getClient()?.hospital_name ?? "-")
  }, [getClient])

  return { clientName, stats }
}

export default useDashboard
