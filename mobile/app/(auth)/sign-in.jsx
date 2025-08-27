import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import Toast from "react-native-toast-message";
import { authStyles } from "../../assets/styles/auth.styles";
import { Image } from "expo-image";
import CreamCake from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import GoogleBtn from "../../components/GoogleBtn";

const SignIn = () => {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    if (!email || !password)
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill all the fields",
      });
    if (!isLoaded) return;
    setLoading(true);
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Sign in failed . Please try again.",
        });
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

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
              source={require("../../assets/images/cake1.png")}
              contentFit="contain"
              style={authStyles.image}
            />
          </View>

          {/* Sign In Form */}
          <View style={authStyles.formContainer}>
            <Text style={authStyles.header}>Login</Text>
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
              onPress={handleSignIn}
              disabled={loading}
              activeOpacity={0.8}
            >
              <Text style={authStyles.buttonText}>
                {loading ? "Sign in...." : "Sign In"}
              </Text>
            </TouchableOpacity>
            <Text style={authStyles.ChangePage}>
              Forgest your password ??{" "}
              <Link href={"/auth/reset"} style={authStyles.ChangeLink}>
                Reset Her!!!
              </Link>
            </Text>
            <View style={authStyles.dividerContainer}>
              <View style={authStyles.line} />
              <Text style={authStyles.dividerText}>Or login with</Text>
              <View style={authStyles.line} />
            </View>
            {/* <TouchableOpacity
              style={[
                authStyles.buttonAuth,
                loading && authStyles.buttonAuthDisabled,
              ]}
              disabled={loading}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text style={authStyles.buttonText}>
                {loading ? "Google..." : "Google"}
              </Text>
            </TouchableOpacity> */}
            <GoogleBtn/>
            <Text style={authStyles.ChangePage}>
              Don’t have an account yet??
              <Link href={"./sign-up"} style={authStyles.ChangeLink}>
                Register here!!!
              </Link>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
