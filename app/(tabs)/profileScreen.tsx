import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";
import CustomAppLoading from "../components/appLoading";

export default function ProfileScreen() {
  const [fontsLoaded] = useFonts({
    "Manrope-Regular": require("../../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("../../assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <CustomAppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  },
  title: {
    color: "#FCFCFC",
    fontSize: 30,
    fontFamily: "Manrope-Regular",
  },
});
