import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { homeStyles } from "../../assets/styles/home.styles";
import { Recipes } from "../../components/Recipes";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";

const Myrecipes = () => {
  const { type = "Myrecipes" } = useLocalSearchParams();
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");

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
        <Categories selected={selected} setSelected={setSelected} />

        <Recipes searchText={searchText} shouldUseUserId={true} />
      </ScrollView>
    </View>
  );
};

export default Myrecipes;
