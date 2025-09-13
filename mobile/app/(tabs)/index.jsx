import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { homeStyles } from "../../assets/styles/home.styles";
import SearchBar from "../../components/SearchBar";

import GradientBox from "../../components/GradientBox";

import Ionicons from "@expo/vector-icons/Ionicons";
import CreamCake from "../../constants/colors";
import { useRouter } from "expo-router";

import { getRecipes } from "../../services/recipes";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useDebounce } from "@uidotdev/usehooks";

export default function HomeScreen() {
  const route = useRouter();
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText, 300);

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    // Fetch recipes or perform any setup actions here
    getRecipes({search : debouncedSearchTerm })
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [debouncedSearchTerm]);

  return (
    <View style={homeStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={homeStyles.keyboardView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeStyles.ScrollView}
        >
          <SearchBar setSearchText={setSearchText} searchText={searchText} />
          <GradientBox />
          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => route.push("./Add")}
          >
            <Ionicons name="add" size={30} color={CreamCake.secondary} />
            <Text style={homeStyles.btnText}>Add Recipe</Text>
          </TouchableOpacity>
          <View style={homeStyles.headerSection}>
            <Text style={homeStyles.sectionTitle}>MY RECIPES</Text>
            <TouchableOpacity
              onPress={() =>
                route.push({
                  pathname: "/recipes",
                  params: { type: "Myrecipes" },
                })
              }
            >
              <Text style={homeStyles.View}>View All</Text>
            </TouchableOpacity>
          </View>
          {recipes.length > 0 && (
            <FlatList
              data={recipes.slice(0, 2)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => route.push(`/recipe/${item.id}`)}
                >
                  <Card recipe={item} />
                </TouchableOpacity>
              )}
              numColumns={2}
              columnWrapperStyle={homeStyles.row}
              contentContainerStyle={homeStyles.recipesGrid}
              scrollEnabled={false}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
