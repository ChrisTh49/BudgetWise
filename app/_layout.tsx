import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/(auth)/getStartedScreen");
  }, []);
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
});
