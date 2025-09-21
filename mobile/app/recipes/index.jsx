import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";

const Myrecipes = () => {
  const { type = "Myrecipes" } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: "My recipes",
        }}
      />
      <Text>Recipes</Text>
    </View>
  );
};

export default Myrecipes;
