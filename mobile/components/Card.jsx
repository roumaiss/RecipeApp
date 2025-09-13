import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import CreamCake from "../constants/colors";

const Card = ({ recipe }) => {
  return (
    <View style={CardStyle.container}>
      <Image
        source={{ uri: `${process.env.EXPO_PUBLIC_BASE_URL}${recipe.image}` }}
        style={CardStyle.image}
      />
      <Text style={CardStyle.title}>{recipe.title}</Text>
      <Text style={CardStyle.description}>{recipe.description}</Text>
    </View>
  );
};
const CardStyle = StyleSheet.create({
  container: {
    height: 230,
    padding: 10,
    borderRadius: 30,
    backgroundColor: CreamCake.background,
    shadowColor: CreamCake.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 4,
  },
  image: { alignSelf: "stretch", height: 120, borderRadius: 20 },
  title: {
    marginVertical: 10,
    fontWeight: "bold",
    color: CreamCake.solidPink,
  },
  description: {
    fontWeight: "600",
    color:CreamCake.text
  },
});
export default Card;
