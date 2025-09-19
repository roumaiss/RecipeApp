import { Stack } from "expo-router";
import SharedStack from "../../../components/SharedStack";

const _layout = () => {
  return (
    <SharedStack>
      <Stack.Screen name="export" options={{ title: "Discover" }} />
    </SharedStack>
  );
};

export default _layout;
