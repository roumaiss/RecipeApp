import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "@/services/category";
import Category from "./Category";
import { explorStyle } from "../assets/styles/explore.style";

const Categories = ({ setSelected, selected }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch recipes or perform any setup actions here
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  return (
    <View>
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
    </View>
  );
};

export default Categories;
