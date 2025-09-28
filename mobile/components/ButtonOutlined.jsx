import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import CreamCake from "../constants/colors";

const ButtonOutlined = ({ press, text }) => {
  return (
    <TouchableOpacity onPress={press} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height:35, 
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CreamCake.background,
    borderWidth: 1,
    borderColor: CreamCake.secondary,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  text: {
    color: CreamCake.secondary,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default ButtonOutlined;
