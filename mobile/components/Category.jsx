import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { explorStyle } from "../assets/styles/explore.style";
import CreamCake from "../constants/colors";
const Category = ({ item, setSelected, selected }) => {
  console.log(`${process.env.EXPO_PUBLIC_BASE_URL}${item.image}`);
  return (
    <TouchableOpacity onPress={() => setSelected(item.name)}>
      <View
        style={[
          categoryStyle.container,
          selected === item.name && categoryStyle.active,
        ]}
      >
        <Image
          source={{ uri: `${process.env.EXPO_PUBLIC_BASE_URL}${item.image}` }}
          style={categoryStyle.image}
        />
        <Text style={categoryStyle.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const categoryStyle = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
  },
  active: {
    borderWidth: 2,
    borderRadius: 30,
    padding: 8,
    borderColor: CreamCake.secondary,
  },
  image: {
    height: 75,
    width: 75,
  },
  name: {
    fontWeight: "bold",
    color: CreamCake.primary,
  },
});
export default Category;
