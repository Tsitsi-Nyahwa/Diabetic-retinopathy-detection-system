import { CameraContextType } from "@/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export function CameraProvider({ children }: { children: ReactNode }) {
  const [photoUri, setPhotoUri] = useState<string | undefined>(undefined);

  return (
    <CameraContext.Provider value={{ photoUri, setPhotoUri }}>
      {children}
    </CameraContext.Provider>
  );
}

export function useCamera() {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCamera must be used inside a CameraProvider");
  }
  return context;
}
