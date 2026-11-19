import AsyncStorage from "@react-native-async-storage/async-storage";

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]; 
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const getInitials = (name: string):string => { 

  const initials = name.split(" ")
  .map(word => word.charAt(0).toUpperCase())
  .join("");

  return initials
}

export const getRankTitle = (score: number) => {
  if (score < 600) return "👶 Beginner Visioneer";
  if (score < 1200) return "🧐 Focus Finder";
  if (score < 1800) return "🔎 Sharp Observer";
  if (score < 2400) return "💡 Mind Trainer";
  if (score < 3000) return "🔥 Vision Warrior";
  if (score < 3600) return "⚡ Eye Master";
  return "🏆 Eagle Champion"; 
};
