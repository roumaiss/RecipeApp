import { StyleSheet } from "react-native";
import CreamCake from "../../constants/colors";

export const explorStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: CreamCake.background,
  },
  ScrollView: {
    flex: 1,
    paddingBottom: 32,
  },
  keyboardView: {
    flex: 1,
  },
  
  grid: {
    gap: 10,
    marginTop: 20,
  },
});
