import { StyleSheet, TouchableOpacity,  } from "react-native";
import {  useUser } from "@clerk/clerk-expo";
import { Image } from "expo-image";

const ProfileAvatar = () => {
  const { user } = useUser();
  console.log(user?.imageUrl);
  const handleAvatarPress = () => {
    // Navigate to profile or show user menu
    // You can add navigation logic here
    console.log("Avatar pressed");
  };
  return (
    <TouchableOpacity
      onPress={handleAvatarPress}
      style={headerStyles.avatarContainer}
    >
      <Image source={{ uri: user?.imageUrl }} style={headerStyles.avatar} />
    </TouchableOpacity>
  );
};

const headerStyles = StyleSheet.create({
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default ProfileAvatar;
