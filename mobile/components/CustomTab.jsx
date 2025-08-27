// components/CustomAddButton.jsx
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import CreamCake from "../constants/colors";
import { useRoute } from "@react-navigation/native";

const CustomAddButton = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Get the current route object

  // Check if the current route's name is 'add'
  const isFocused = route.name === "Add";
  console.log(isFocused);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Add")} // Navigate to your "add" screen
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: CreamCake.primary,
          borderColor: CreamCake.background,
          borderWidth: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="add" size={30} color={CreamCake.background} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomAddButton;
