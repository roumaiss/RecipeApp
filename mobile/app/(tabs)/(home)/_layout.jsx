import { Stack } from "expo-router";
import SharedStack from "../../../components/SharedStack";

const _layout = () => {
  return (
    <SharedStack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </SharedStack>
  );
};

export default _layout;
