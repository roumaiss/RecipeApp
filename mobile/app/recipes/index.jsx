import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Myrecipes = () => {
  const { type = "Myrecipes" } = useLocalSearchParams();
  console.log(type);
  return (
    <View>
      <Text>Recipes</Text>
    </View>
  );
};

export default Myrecipes;
