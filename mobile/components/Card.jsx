import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import CreamCake from "../constants/colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

const { width } = Dimensions.get("window");
const cardWidth = (width - 40) / 2;

const Card = ({ recipe }) => {
  // const { width } = Dimensions.get("window");
  // const cardWidth = (width - 48) / 2;
  const [click, setClick] = useState(false);
  return (
    <View style={CardStyle.container}>
      <TouchableOpacity
        onPress={() => setClick(!click)}
        style={CardStyle.heart}
      >
        {click ? (
          <Entypo name="heart" size={24} color="white" />
        ) : (
          <Entypo name="heart-outlined" size={24} color="white" />
        )}
      </TouchableOpacity>

      <Image
        source={{ uri: `${process.env.EXPO_PUBLIC_BASE_URL}${recipe.image}` }}
        style={CardStyle.image}
      />
      <Text style={CardStyle.title}>{recipe.title}</Text>
      <Text style={CardStyle.description} numberOfLines={3}>
        {recipe.description}
      </Text>
    </View>
  );
};
const CardStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: 240,
    width: cardWidth,
    padding: 12,
    borderRadius: 30,
    backgroundColor: CreamCake.background,
    shadowColor: CreamCake.primary, // Your color
    shadowOffset: {
      width: 0, // X position
      height: 2, // Y position
    },
    shadowOpacity: 0.55, // 55% opacity
    shadowRadius: 8, // Blur value
    elevation: 8,
    position: "relative",
  },
  image: { alignSelf: "stretch", height: 120, borderRadius: 20 },
  title: {
    marginTop: 5,
    marginBottom: 2,
    fontWeight: "bold",
    color: CreamCake.solidPink,
  },
  description: {
    fontWeight: "600",
    color: CreamCake.text,
    fontSize: 12,
  },
  heart: {
    position: "absolute",
    zIndex: 10,
    top: 15,
    right: 17,
  },
});
export default Card;
