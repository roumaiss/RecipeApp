import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";
import CreamCake from "../constants/colors";
const { width } = Dimensions.get("window");
const cardWidth = (width - 40) / 2;
const Card = ({ recipe }) => {
  // const { width } = Dimensions.get("window");
  // const cardWidth = (width - 48) / 2;
  return (
    <View style={CardStyle.container}>
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
    width:cardWidth,
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
});
export default Card;
