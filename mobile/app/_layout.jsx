import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import Toast from "react-native-toast-message";
import SafeScreen from "../components/SafeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreamCake from "@/constants/colors";
import ProfileAvatar from "@/components/ProfileAvatar";
export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider tokenCache={tokenCache}>
        <SafeScreen>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: CreamCake.background,
              },
              headerTintColor: CreamCake.secondary,
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: CreamCake.secondary,
              },
              headerRight: () => <ProfileAvatar />,
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
          <Toast position="top" topOffset={50} />
        </SafeScreen>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
