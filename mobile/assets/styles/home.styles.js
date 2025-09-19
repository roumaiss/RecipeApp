import { StyleSheet } from "react-native";
import CreamCake from "../../constants/colors";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: CreamCake.background,
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: 110,
    marginTop:15
  },
  keyboardView: {
    flex: 1,
  },
  gradient: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: CreamCake.background,
    marginBottom: 5,
  },
  text: {
    color: CreamCake.background,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: CreamCake.primary,
    borderStyle: "dashed",
  },
  btnText: {
    color: CreamCake.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: CreamCake.primary,
    fontSize: 24,
    
  },
  recipesGrid: {
    gap: 10,
    marginVertical:20, 
    paddingHorizontal:10, 
    justifyContent:"center", 
    alignItems:  "center"
  },
  row: {
    justifyContent: "space-between",
    gap: 10,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  View:{
    fontWeight:"bold", 
    color:CreamCake.text
  }
});
