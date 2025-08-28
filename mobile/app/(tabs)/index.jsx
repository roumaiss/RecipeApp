import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { homeStyles } from "../../assets/styles/home.styles";
import SearchBar from "../../components/SearchBar";

import GradientBox from "../../components/GradientBox";

import Ionicons from "@expo/vector-icons/Ionicons";
import CreamCake from "../../constants/colors";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const route = useRouter();
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
          <SearchBar onSearch={() => console.log("Search triggered")} />
          <GradientBox />
          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => route.push("./Add")}
          >
            <Ionicons name="add" size={30} color={CreamCake.secondary} />
            <Text style={homeStyles.btnText}>Add Recipe</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
