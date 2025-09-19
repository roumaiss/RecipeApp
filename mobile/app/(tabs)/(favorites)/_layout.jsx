import { Stack } from "expo-router";
import SharedStack from "../../../components/SharedStack";

const _layout = () => {
  return (
    <SharedStack>
      <Stack.Screen name="Favorites" options={{ title: "Favorites" }} />
    </SharedStack>
  );
};

export default _layout;
