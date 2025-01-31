// Componente CustomAppLoading
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

type Props = {
  children?: React.ReactNode; 
};

const CustomAppLoading: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
      {children && <View>{children}</View>} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomAppLoading;