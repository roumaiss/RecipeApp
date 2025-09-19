import { Stack } from "expo-router";
import CreamCake from "../constants/colors";
import ProfileAvatar from "./ProfileAvatar";
export default function SharedStack({ children }) {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: CreamCake.background,
          height: 80,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: CreamCake.secondary,
        },
        headerRight: () => <ProfileAvatar />,
      }}
    >
      {children}
    </Stack>
  );
}
