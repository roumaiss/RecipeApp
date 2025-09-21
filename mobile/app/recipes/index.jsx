import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { homeStyles } from "../../assets/styles/home.styles";
import { Recipes } from "../../components/Recipes";
import SearchBar from "../../components/SearchBar";

const Myrecipes = () => {
  const { type = "Myrecipes" } = useLocalSearchParams();
  const [searchText, setSearchText] = useState("");
  return (
    <View style={homeStyles.container}>
      <Stack.Screen
        options={{
          title: "My recipes",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={homeStyles.ScrollView}
      >
        <SearchBar setSearchText={setSearchText} searchText={searchText} />
        <Recipes searchText={searchText} />
      </ScrollView>
    </View>
  );
};

export default Myrecipes;
