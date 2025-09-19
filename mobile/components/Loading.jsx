import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import CreamCake from "../constants/colors";

const MyLoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={CreamCake.primary} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },
  text: {
    color: CreamCake.primary,
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default MyLoadingScreen;
