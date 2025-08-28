import {  Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CreamCake from "../constants/colors";
import { homeStyles } from "../assets/styles/home.styles";

const GradientBox = () => {
  return (
    <LinearGradient
      colors={[CreamCake.primary, CreamCake.secondary]} // gradient colors
      style={homeStyles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Your other components go here */}
      <Text style={homeStyles.title}>Welcome back ! 👋</Text>
      <Text style={homeStyles.text}>Ready to cook something delicious?</Text>
    </LinearGradient>
  );
};

export default GradientBox;
