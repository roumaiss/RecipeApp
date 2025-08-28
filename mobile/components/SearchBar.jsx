import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CreamCake from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={CreamCake.secondary}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={CreamCake.secondary}
        value={searchText}
        onChangeText={handleSearchChange}
        clearButtonMode="always"
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: CreamCake.secondary,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20, // leave space for the icon
    paddingRight: 40,
    fontSize: 16,
    color: CreamCake.text,
  },
  icon: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -10 }], // centers the icon vertically
  },
});

export default SearchBar;
