import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreamCake from "../../constants/colors";
import { useRouter } from "expo-router";
import { addStyles } from "../../assets/styles/add.styles";
import ButtonFill from "../../components/ButtonFill";
import ButtonOutlined from "../../components/ButtonOutlined";
import ImagePicker from "../../components/ImagePicker";

const Add = () => {
  const route = useRouter();
  return (
    <View style={addStyles.container}>
      <View style={addStyles.header}>
        <View style={addStyles.btns}>
          <TouchableOpacity onPress={() => route.push("/")}>
            <Ionicons
              name="close-circle"
              size={42}
              color={CreamCake.secondary}
            />
          </TouchableOpacity>
          <Text numberOfLines={1} ellipsizeMode="tail" style={addStyles.title}>
            Create New recipe
          </Text>
        </View>
        <View style={addStyles.btns}>
          <ButtonFill text="save" press={() => route.push("/drafts")} />
          <ButtonOutlined text="publish" press={() => route.back()} />
        </View>
      </View>
      <ImagePicker />
    </View>
  );
};

export default Add;
