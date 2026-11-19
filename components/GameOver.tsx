import { styles } from "@/styles";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { BounceIn, BounceOut, FadeInDown } from "react-native-reanimated";

type GameOverProps = {
  score: number;
  outOf?: number;
  onRestart: () => void;
  isHighscore?: boolean; 
};

const getPrompt = (score: number, outOf?: number) => {
  const percentage = outOf ? (score / outOf) * 100 : score;

  if (percentage < 30) return "🙏 Pray for your eyes!";
  if (percentage < 50) return "😬 Your eyes are ehh!!";
  if (percentage < 60) return "🤔 I know you can do better than that!";
  if (percentage < 70) return "👍 Not bad, keep training!";
  if (percentage < 80) return "🔥 Good job! Eyes sharp!";
  if (percentage < 90) return "⚡ Almost perfect vision!";
  return "🏆 Eagle eyes! Perfect score!";
};

export default function GameOver({ score, outOf, onRestart, isHighscore }: GameOverProps) {
  const router = useRouter();

  return (
    <View style={[styles.screen, styles.centerItems]}>
      <Animated.View
        entering={BounceIn.duration(800)}
        exiting={BounceOut.duration(500)}
        style={{ alignItems: "center" }}
      >
        <Text style={[styles.textCenter, styles.h3, styles.fontSemiBold, { marginBottom: 20 }]}>
          🎉 Game Over
        </Text>

        {isHighscore && (
          <Animated.Text
            entering={FadeInDown.duration(800)}
            style={[styles.h4, styles.fontBold, { color: "#FFD700", marginBottom: 10 }]}
          >
            🌟 YEEEY!! NEW HIGHSCORE!! 🌟
          </Animated.Text>
        )}

        <Text style={[styles.h4, styles.fontSemiBold]}>
          Final Score: {score} {outOf ? ` / ${outOf}` : ""}
        </Text>
        <Text style={[styles.p, { marginTop: 10, marginBottom: 25 }]}>
          {getPrompt(score)}
        </Text>

        <View style={{ flexDirection: "row", gap: 15 }}>
          <TouchableOpacity
            style={[styles.button, styles.bg_success]}
            onPress={onRestart}
          >
            <Text style={[styles.h6, styles.text_white]}>🔄 Start Again</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.bg_amber]} 
            onPress={() => router.back()}
          >
            <Text style={[styles.h6, styles.text_white]}>⬅ Go Back</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
