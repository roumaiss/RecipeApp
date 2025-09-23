import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { explorStyle } from "@/assets/styles/explore.style";
import Categories from "../../components/Categories";

const Export = () => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  // const debouncedSearchTerm = useDebounce(searchText, 300);

  return (
    <View style={explorStyle.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={explorStyle.keyboardView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={explorStyle.ScrollView}
        >
          <SearchBar setSearchText={setSearchText} searchText={searchText} />
          <Categories selected={selected} setSelected={setSelected} />          
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Export;
