import { Stack } from "expo-router";
import SharedStack from "../../../components/SharedStack";

const _layout = () => {
  return (
    <SharedStack>
      <Stack.Screen name="Profile" options={{ title: "Profile" }} />
    </SharedStack>
  );
};

export default _layout;
