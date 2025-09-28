import { StyleSheet } from "react-native";
import CreamCake from "../../constants/colors";

export const addStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: CreamCake.background,
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:20
  },
  btns:{
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  }, 
  title:{
    color: CreamCake.secondary,
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 120,
  }
});
