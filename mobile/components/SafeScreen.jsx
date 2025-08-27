import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CreamCake from "../constants/colors";
import { usePathname } from "expo-router";
const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();

  const pathname = usePathname();
  const isAuthRoute = pathname.includes("auth");

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: isAuthRoute ? CreamCake.primary : "",
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
