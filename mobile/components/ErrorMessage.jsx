import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import CreamCake from "../constants/colors";

const ErrorMessage = ({ error, refetch }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Error</Text>
      <Text>{error}</Text>
      <TouchableOpacity onPress={() => refetch()} style={Styles.btn}>
        <Text style={Styles.text}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Fixed: removed extra space
    marginVertical: 24,
  },
  title: {
    color: CreamCake.error,
    fontWeight: "bold",
    fontSize: 20,
  },

  text: {
    color: CreamCake.background,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: CreamCake.secondary,
    backgroundColor: CreamCake.primary,
    alignSelf: "stretch",
  },
});
export default ErrorMessage;
