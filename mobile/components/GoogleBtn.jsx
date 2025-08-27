import React, { useCallback, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { useSSO } from "@clerk/clerk-expo";
import {  Text, TouchableOpacity } from "react-native";
import { authStyles } from "../assets/styles/auth.styles";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

// Hook to warm up the browser on Android (faster auth UX)
export const useWarmUpBrowser = () => {
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
};

// Handle pending authentication sessions
WebBrowser.maybeCompleteAuthSession();

export default function GoogleBtn() {
  useWarmUpBrowser();
  const router = useRouter();
  // Clerk SSO hook
  const { startSSOFlow } = useSSO();

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl: AuthSession.makeRedirectUri(),
      });

      if (createdSessionId) {
        // If sign in succeeded, activate the session
        setActive({
          session: createdSessionId,
          navigate: async ({ session }) => {
            if (session?.currentTask) {
              console.log(session.currentTask);
              return;
            }

            router.push("/");
          },
        });
      } else {
        // Handle cases where MFA or more steps are required
      }
    } catch (err) {
      console.error("Google Sign-in error:", err);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableOpacity
      style={[authStyles.buttonAuth]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={require("../assets/images/google.png")}
        style={{ width: 25, height: 25 }}
      />
      <Text style={authStyles.buttonText}>Google</Text>
    </TouchableOpacity>
  );
}
