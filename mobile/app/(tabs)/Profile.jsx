import { useUser } from "@clerk/clerk-expo";
import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function UpdateProfile() {
  const { user } = useUser();
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (!user) return null;

  const updateEmail = async () => {
    try {
      await user.createEmailAddress({ email });
      await user.reload(); // refresh user data
      alert("Email added! (Verify it from your inbox)");
    } catch (err) {
      alert("Error updating email: " + err.errors[0].message);
    }
  };

  const updatePassword = async () => {
    try {
      await user.updatePassword({ currentPassword, newPassword });
      alert("Password updated!");
    } catch (err) {
      alert("Error updating password: " + err.errors[0].message);
    }
  };

  const updateImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
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

  return (
    <View style={{ padding: 20 }}>
      {/* Email */}
      <TextInput
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Update Email" onPress={updateEmail} />

      {/* Password */}
      <TextInput
        placeholder="Current Password"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Update Password" onPress={updatePassword} />

      {/* Profile Image */}
      <Button title="Update Profile Image" onPress={updateImage} />
    </View>
  );
}
