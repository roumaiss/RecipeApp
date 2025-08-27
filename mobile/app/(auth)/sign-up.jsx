import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { authStyles } from "../../assets/styles/auth.styles";
import { Image } from "expo-image";
import CreamCake from "../../constants/colors";
import { Link, useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import GoogleBtn from "../../components/GoogleBtn";
import Toast from "react-native-toast-message";
import VerifyEmail from "./verify-email";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  const onSignUpPress = async () => {
    if (!email || !password)
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill all the fields",
      });
    if (!isLoaded) return;
    setLoading(true);

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };
  if (pendingVerification)
    return (
      <VerifyEmail
        setPendingVerification={setPendingVerification}
        email={email}
      />
    );
  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={authStyles.keyboardView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          style={authStyles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={authStyles.imageContainer}>
            <Image
              source={require("../../assets/images/CAKE2.png")}
              contentFit="contain"
              style={authStyles.image}
            />
          </View>

          {/* Sign In Form */}
          <View style={authStyles.formContainer}>
            <Text style={authStyles.header}>Register</Text>
            <View>
              <Text style={authStyles.label}>Email</Text>
              <TextInput
                style={authStyles.input}
                placeholder="Enter Your Email"
                placeholderTextColor={CreamCake.primary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View>
              <Text style={authStyles.label}>Password</Text>
              <View style={authStyles.passwordContainer}>
                <TextInput
                  style={authStyles.input}
                  placeholder="Enter Your password"
                  placeholderTextColor={CreamCake.primary}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={authStyles.showPasswordButton}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={CreamCake.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* sign in button */}
            <TouchableOpacity
              style={[
                authStyles.buttonAuth,
                loading && authStyles.buttonAuthDisabled,
              ]}
              onPress={onSignUpPress}
              disabled={loading}
              activeOpacity={0.8}
            >
              <Text style={authStyles.buttonText}>
                {loading ? "Register...." : "Register"}
              </Text>
            </TouchableOpacity>
            <Text style={authStyles.ChangePage}>
              Already have an account ??
              <Link href={"./sign-in"} style={authStyles.ChangeLink}>
                Login now!!!
              </Link>
            </Text>
            <View style={authStyles.dividerContainer}>
              <View style={authStyles.line} />
              <Text style={authStyles.dividerText}>Or Register with</Text>
              <View style={authStyles.line} />
            </View>
            <GoogleBtn />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
