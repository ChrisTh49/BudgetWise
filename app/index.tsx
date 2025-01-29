import SwipeToStart from "@/components/swipeToStart";
import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/images/wallpaper.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Contenedor de la imagen centrado */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/HomeScreen.png")}
            style={styles.image}
          />
        </View>
        {/* Título */}
        <Text style={styles.title}>
          <Text style={{ fontFamily: "Manrope-Bold" }}>Take Control</Text> of
          your Finances
        </Text>
        {/* Descripción */}
        <Text style={styles.description}>
          With our app, you can easily track your income and expenses, make
          informed decisions about your money
        </Text>
        {/* Slider de desbloqueo */}
        <View style={styles.unlockContainer}>
          <SwipeToStart />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 500,
    height: 300,
    resizeMode: "contain",
    maxWidth: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    width: "100%",
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "left",
    fontFamily: "Manrope-Regular",
  },
  description: {
    fontSize: 15,
    color: "white",
    textAlign: "left", // Alinea la descripción a la izquierda
    marginTop: 10,
    fontFamily: "Manrope-Regular",
  },
  unlockText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  unlockContainer: {
    width: "100%",
    alignItems: "center",
  },
});
