import { CounterContext } from "@/types";
import React, { createContext, ReactNode, useContext, useState } from "react";


const RefreshDashboardContext = createContext<CounterContext | undefined>(undefined);

export const RefreshDashboardProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(0);

  const increase = () => setValue((prev) => prev + 1);

  return (
    <RefreshDashboardContext.Provider value={{ value, increase }}>
      {children}
    </RefreshDashboardContext.Provider>
  );
};

export const useRefreshDashboardCounter = () => {
  const context = useContext(RefreshDashboardContext);
  if (!context) throw new Error("useCounter must be used inside CounterProvider");
  return context;
};
