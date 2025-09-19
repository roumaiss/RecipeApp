import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import CreamCake from "../constants/colors";
import { useRouter } from "expo-router";

const NoContent = ({ refetch }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/noContent.png")}
        contentFit="contain"
        style={styles.Image}
      />
      <Text style={styles.title}>There is no content</Text>
      <Text style={styles.text}>
        Create now your content to get started and make this page more useful.
      </Text>
      <TouchableOpacity style={styles.btn2} onPress={() => router.push("/Add")}>
        <Text style={styles.btn2Text}>Create recipe now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => refetch()}>
        <Text style={styles.btnText}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  Image: {
    height: 150,
    width: 150,
  },
  title: {
    color: CreamCake.text,
    fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    textAlign: "center",
    marginHorizontal: 40,
    color: CreamCake.text,
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
  btnText: {
    color: CreamCake.background,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: CreamCake.secondary,
    backgroundColor: CreamCake.background,
    alignSelf: "stretch",
  },
  btn2Text: {
    color: CreamCake.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default NoContent;
