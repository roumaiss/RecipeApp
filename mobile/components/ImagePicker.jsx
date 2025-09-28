import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CreamCake from "../constants/colors";
import Feather from "@expo/vector-icons/Feather";
import * as DocumentPicker from "expo-document-picker";
import Toast from "react-native-toast-message";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const ImagePicker = () => {
  const [images, setImages] = useState([]);
  const removeImage = (uri) => {
    setImages((prev) => prev.filter((img) => img !== uri));
  };
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: "image/*" });
      if (result.canceled) return;

      const fileUri = result.assets[0].uri;
      setImages((prevImages) => [...prevImages, fileUri]);
    } catch (err) {
      console.error("❌ Error picking file:", err);
      Toast.show({
        type: "error",
        text1: "Erreur d'importation",
        text2: "Une erreur est survenue lors de l'importation",
      });
    }
  };
  return (
    <>
      <TouchableOpacity style={imagesPickerStyles.container} onPress={pickFile}>
        <Feather name="image" size={40} color={CreamCake.secondary} />
        <Text style={imagesPickerStyles.text}>Add recipe cover image</Text>
      </TouchableOpacity>
      {images.length > 0 && (
        <ScrollView
          horizontal
          style={imagesPickerStyles.scroll}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((img, index) => (
            <View key={index} style={imagesPickerStyles.imageContainer}>
              <FontAwesome
                name="window-close"
                size={32}
                color={CreamCake.secondary}
                style={imagesPickerStyles.close}
                onPress={() => removeImage(img)}
              />
              <Image
                source={{ uri: img }}
                style={imagesPickerStyles.image}
                contentFit="cover"
              />
            </View>
          ))}
        </ScrollView>
      )}
    </>
  );
};
const imagesPickerStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: height * 0.3,
    borderRadius: 30,
    borderStyle: "dashed",
    borderWidth: 1.5,
    borderColor: CreamCake.secondary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: CreamCake.accent,
  },
  text: {
    color: CreamCake.secondary,
    fontSize: 16,
    marginTop: 10,
    fontWeight: "600",
  },
  scroll: {
    paddingVertical: 15,
  },
  imageContainer: {
    position: "relative",
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
  },
  close: {
    position: "absolute",
    top: -5,
    right: 2,
    zIndex: 10,
    backgroundColor: "white",
  },
});
export default ImagePicker;
