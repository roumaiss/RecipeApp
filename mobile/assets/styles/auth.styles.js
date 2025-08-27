import { Dimensions, StyleSheet } from "react-native";
import CreamCake from "../../constants/colors";
const { height } = Dimensions.get("window");
export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CreamCake.primary,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    height: height * 0.3,
    marginBottom: 30,
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  formContainer: {
    backgroundColor: CreamCake.background,
    paddingHorizontal: 24,
    height: height * 0.7,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
  },
  header: {
    color: CreamCake.secondary,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: CreamCake.primary,
    padding: 12,
    borderRadius: 30,
    marginBottom: 16,
    color: CreamCake.text,
    backgroundColor: CreamCake.background,
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 15,
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    top: 16,
  },

  buttonAuth: {
    backgroundColor: CreamCake.primary,
    borderWidth: 1,
    borderColor: CreamCake.secondary,
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    gap: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAuthDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    color: CreamCake.background,
    textAlign: "center",
    padding: 12,
    fontWeight: "600",
  },
  label: {
    color: CreamCake.secondary,
    marginBottom: 8,
    fontWeight: "600",
  },
  //   the line style
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: CreamCake.primary, // Light gray color
  },
  dividerText: {
    marginHorizontal: 15,
    fontSize: 16,
    color: CreamCake.secondary, // Pink color like in your image
    fontWeight: "500",
  },
  ChangePage: {
    textAlign: "right",
    marginTop: 10,
    color: CreamCake.text,
  },
  ChangeLink: {
    color: CreamCake.secondary,
    fontWeight: "600",
    textDecorationLine: "underline",
    paddingLeft: 20,
  },
  goBack: {
    margin: 10,
  },
  verifyContainer: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  subTitle: {
    color: CreamCake.secondary,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  codeFieldRoot: {  marginBottom:20 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 1,
    borderColor: CreamCake.primary,
    textAlign: "center",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  text: { fontSize: 20, textAlign: "center" },
  focusCell: {
    borderColor: CreamCake.secondary,
  },
});
