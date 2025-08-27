import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import Toast from "react-native-toast-message";
import SafeScreen from "../components/SafeScreen";
export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
        <Toast position="top" topOffset={50} />
      </SafeScreen>
    </ClerkProvider>
  );
}
