import { LucideIcon } from "lucide-react-native";

export interface User { 
  hospital_name: string,
  token: string 
}
export interface RewardsContextType {
  selectedPatient : PatientGamePoints | undefined,
  loadPatient : (p: PatientGamePoints)=> void;
  clearPatient : ()=> void
  savePoint : (g: string, p:number) => void
}
export interface AuthContextType {
  user: null | User;
  login: (userData: User) => void;
  logout: () => void;
  getClient : ()=> User | null
};

export interface CameraContextType {
  photoUri: string | undefined;
  setPhotoUri: (uri: string | undefined) => void;
};
export interface Badge {
  badgeName : string,
  slug : string,
  game : "Guess the number" | "Odd one out" | "Color Cube" | "Sequence of Letters" | "Focus Shift",
  achieved :boolean
}

export type PatientGamePoints = {
  id: string
  fullname: string
  games: Record<string, number>
}


export interface Game {
  name : "Guess the number" | "Odd one out" | "Focus Shift" | "Color Cube" | "Sequence of Letters",
  points : number,
  page : string,
  color : string,
  total?: number,
  Icon : LucideIcon
}

export interface Points {
  "Guess the number" : number,
  "Odd one out" : number,
  "Focus Shift" : number,
  "Color Cube" : number,
  "Sequence of Letters": number
}
export interface SequencePuzzle {
  sequence: string;
  options: {
    option: string;
    isCorrect: boolean;
  }[];
}

export interface CubeColors {
  mainColor : string,
  feintColor : string,
}

export interface GuessNumberImages {
  image : any,
  value : number,
  options :number[]
}
export interface Odd{
  OG : any,
  OD : any
}
export interface Option { option: string; isCorrect: boolean };

export interface LoginValidationErrors {
  email: string[]
  password: string[], 

}
export interface RegisterValidationErrors {
  hospitalName: string[]
  email: string[]
  password: string[]
  confirmPassword: string[]
}

export interface Selections {
  label: string,
  value :  string
}

export interface CounterContext {
  value: number;
  increase: () => void;
};

export interface PredictionResult {
  confidence : Number,
  class :  string
}

export interface PatientMini{
  id: string;
  full_name: string;
  last_screening: string; 
  diabetic_type: string;
  age: number;
  blood_sugar: number;
}

export interface Pagination {
  current_page: number;
  has_previous: boolean;
  has_next: boolean;
  previous_page: number | null;
  next_page: number | null;
}
export interface PageContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  increasePage: () => void;
  resetPage: () => void;
};
export interface Patient {
  id: string;        
  hospital_id: string;
  fullname: string;
  age: number;
  email: string;
  phone: string;
  diabetic_type: string;
  blood_sugar: number;
  hba1c: number;
  pregnancy_status: string;
  last_screening: string;
}

export interface ScreenRecord {
  confidence : string,
  class: string,
  image? : string,
  recommendations?: AIRecommendation[]
}

export interface AIRecommendation {
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  impact: string;
  action: string;
}
