import { CounterContext } from "@/types";
import React, { createContext, ReactNode, useContext, useState } from "react";


const IncreaseCounter = createContext<CounterContext | undefined>(undefined);

export const IncreaseCounterProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(0);

  const increase = () => setValue((prev) => prev + 1);

  return (
    <IncreaseCounter.Provider value={{ value, increase }}>
      {children}
    </IncreaseCounter.Provider>
  );
};

export const useIncreaseCounter = () => {
  const context = useContext(IncreaseCounter);
  if (!context) throw new Error("useCounter must be used inside CounterProvider");
  return context;
};
