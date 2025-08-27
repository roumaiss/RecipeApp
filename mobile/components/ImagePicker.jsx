import * as ImagePicker from "expo-image-picker";

const pickImage = async (user) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    const fileUri = result.assets[0].uri;
    const response = await fetch(fileUri);
    const blob = await response.blob();

    await user.setProfileImage({ file: blob });
    alert("Profile picture updated!");
  }
};
