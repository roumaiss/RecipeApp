import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { authStyles } from "../../assets/styles/auth.styles";
import Toast from "react-native-toast-message";
import CreamCake from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const VerifyEmail = ({ setPendingVerification, email }) => {
  const { setActive, isLoaded, signUp } = useSignUp();
  const [code, setCode] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ code, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;
    setLoading(true);
    if (!code) {
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter the verification code",
      });
    }
    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });

        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Verification failed. Please try again.",
        });
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };
  function maskEmail(email) {
    if (!email) return "";
    const [name, domain] = email.split("@");
    return name.slice(0, 2) + "......@" + domain; // always 6 dots
  }
  return (
    <View style={{ backgroundColor: CreamCake.background, flex: 1 }}>
      <Pressable
        style={authStyles.goBack}
        onPress={() => setPendingVerification(false)}
      >
        <Ionicons
          name="arrow-back-circle"
          size={40}
          color={CreamCake.primary}
        />
      </Pressable>
      <View style={authStyles.verifyContainer}>
        <Text style={authStyles.subTitle}>Verify your email</Text>
        <Text style={{ color: CreamCake.text, marginBottom: 20 }}>
          Please enter the code that sent to {maskEmail(email)}
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={code}
          onChangeText={setCode}
          cellCount={6}
          rootStyle={authStyles.codeFieldRoot}
          keyboardType="number-pad"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              style={[authStyles.cell, isFocused && authStyles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              <Text style={authStyles.text}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={[
            authStyles.buttonAuth,
            loading && authStyles.buttonAuthDisabled,
          ]}
          onPress={onVerifyPress}
          disabled={loading}
          activeOpacity={0.8}
        >
          <Text style={authStyles.buttonText}>
            {loading ? "Verify...." : "Verify"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyEmail;
