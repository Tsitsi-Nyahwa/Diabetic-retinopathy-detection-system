import { useApis } from "@/api";
import { PatientGamePoints, RewardsContextType } from "@/types";
import { isAxiosError } from "axios";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { ToastAndroid } from "react-native";


const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const RewardsProvider = ({ children }: { children: ReactNode }) => {
  const {api} = useApis();
  const [selectedPatient, setSelectedPatient] = useState<PatientGamePoints | undefined>(undefined)
  
  const syncGames = (update : PatientGamePoints) =>{
    api()
    .patch("/api/rewards/save-points", update)
    .then(response => response.data)
    .then(data=> console.log(data))
    .catch((error) =>{
      const message = isAxiosError(error)
        ? error.response?.data?.error || error.message || "Network error, failed to update score."
        : "Network error, failed to update score.";
        ToastAndroid.show(message, ToastAndroid.SHORT);
    })
  }

  const loadPatient = (patient: PatientGamePoints) => setSelectedPatient(patient)
  const clearPatient = () => setSelectedPatient(undefined)
  const savePoint = (gameName: string, points: number) => {
    setSelectedPatient((p) => {
      if (!p) return p;
      const updated = {
        ...p,
        games: {
          ...p.games,
          [gameName]: points,
        },
      };
      syncGames(updated);
      return updated;
    });
  };

  return (
    <RewardsContext.Provider value={{ selectedPatient, loadPatient, clearPatient, savePoint }}>
      {children}
    </RewardsContext.Provider>
  );
};

export const useRefreshRewardsCounter = () => {
  const context = useContext(RewardsContext);
  if (!context) throw new Error("useCounter must be used inside CounterProvider");
  return context;
};
