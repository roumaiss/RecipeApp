import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import Toast from "react-native-toast-message";
import SafeScreen from "../components/SafeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider tokenCache={tokenCache}>
        <SafeScreen>
          <Slot />
          <Toast position="top" topOffset={50} />
        </SafeScreen>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
