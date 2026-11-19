import useFocusShift from "@/hooks/useFocusShift";
import { height, styles } from "@/styles";
import { ScanEye } from "lucide-react-native";
import React from "react";
import { Animated, Text, View } from "react-native";

const FocusShift = () => {
  const {
    letter,
    seconds,
    scale,
    barWidths,
  } = useFocusShift()
  return (
    <View style={styles.screen}>
      <View style = {[styles.w100, styles.h100, styles.centerItems, styles.flexColumn, {position :"relative"}]}>
          <View style = {[{marginTop : 150 }]}>
              <View style={[styles.flexRow, styles.centerItems, { gap: 5, }]}>
                <ScanEye color={styles.bg_purple.backgroundColor} size={18} />
                <Text style={[styles.h5]}>Focus on the main point</Text>
              </View>     
              <Text style={[styles.h6, styles.textCenter,{  marginBottom: 4}]}>
                Focus Time: {seconds}s
              </Text>
          </View>
          <View
            style={[styles.h100, styles.w100, styles.justifyEvenly, styles.flexRow, {alignItems :"center"}]}
          >
            {barWidths.map((w, idx) => (
              <View
                key={idx}
                style={{ width: w, height: "100%", backgroundColor: "red" }}
              />
            ))}
          </View>
          <View style={[{  flex: 1, top : height/2.2 ,position:"absolute",}, styles.centerItems]}>
            <Animated.View style={[styles.focusCircle, styles.centerItems, {transform : [{scale}]}]}>
              <Text style={{ fontSize: 36, color: "white", fontWeight: "bold" }}>
                {letter}
              </Text>
            </Animated.View>

        </View>
      </View>
    </View>
  );
};

export default FocusShift;
