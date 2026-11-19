import { styles } from "@/styles";
import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

export type PillVariant = "success" | "warning" | "danger" | "outline";

interface PillProps {
  label: string;
  variant?: PillVariant;
  onPress?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, variant = "success", onPress }) => {
  const variantStyle: ViewStyle =
    variant === "success"
      ? styles.bg_success_30
      : variant === "warning"
      ? styles.bg_amber_30
      : variant === "danger"
      ? styles.bg_danger_30
      : styles.outline;

  const textStyle =
    variant === "success" ?
    styles.text_success :
    variant === "danger" ?
    styles.text_danger:
    variant === "warning" ?
    styles.text_amber :
    { color: "#000" } 

  return (
    <TouchableOpacity style={[styles.pill, variantStyle]} onPress={onPress}>
      <Text style={[styles.pillText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Pill;
