import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import SearchBar from "../../components/SearchBar";
import { explorStyle } from "../../assets/styles/explore.style";
import { getCategories } from "../../services/category";
import Category from "../../components/Category";

const Export = () => {
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  // const debouncedSearchTerm = useDebounce(searchText, 300);
  useEffect(() => {
    // Fetch recipes or perform any setup actions here
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
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
          <SearchBar setSearchText={setSearchText} searchText={searchText}  />
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <Category item={item} setSelected={setSelected} selected={selected} />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={explorStyle.grid}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Export;
