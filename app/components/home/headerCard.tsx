import React from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

interface HeaderCardProps {
  children: React.ReactNode;
}

const HeaderCard: React.FC<HeaderCardProps> = ({ children }) => (
  <ImageBackground
    source={require("../../../assets/images/HomeWallpaper.jpg")}
    style={styles.headerCard}
  >
    <LinearGradient
      colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.8)"]}
      style={styles.gradientOverlay}
    />
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  headerCard: {
    width: "100%",
    height: height * 0.4,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HeaderCard;
