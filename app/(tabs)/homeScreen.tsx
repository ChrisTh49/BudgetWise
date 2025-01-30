import SwipeToStart from "@/components/swipeToStart";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import CustomAppLoading from "@/components/appLoading";
import { useState } from "react";
import * as Animatable from "react-native-animatable"; // Importamos la librería

export default function Home() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Manrope-Regular": require("../../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("../../assets/fonts/Manrope-Bold.ttf"),
  });

  const [hasNavigated, setHasNavigated] = useState(false);

  // Función para manejar el inicio
  const handleStart = () => {
    if (!hasNavigated) {
      setHasNavigated(true); // Evita la navegación repetida
      router.push("/(tabs)/financeHome"); // Navegación
    }
  };

  if (!fontsLoaded) {
    return <CustomAppLoading />;
  }

  return (
    <ImageBackground
      source={require("../../assets/images/wallpaper.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Animatable.View
          animation="fadeInUp" // Animación predeterminada de animatable
          duration={1000} // Duración de la animación
          delay={400} // Retraso antes de iniciar la animación
          style={styles.animatedTextContainer}
        >
          {/* Contenedor de la imagen centrado */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/HomeScreen.png")}
              style={styles.image}
            />
          </View>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp" // Animación predeterminada de animatable
          duration={1000} // Duración de la animación
          delay={500} // Retraso antes de iniciar la animación
          style={styles.animatedTextContainer}
        >
          {/* Título */}
          <Text style={styles.title}>
            <Text style={styles.boldText}>Take Control</Text> of your Finances
          </Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp" // Animación predeterminada de animatable
          duration={1000} // Duración de la animación
          delay={700} // Retraso antes de iniciar la animación
          style={styles.animatedTextContainer}
        >
          {/* Descripción */}
          <Text style={styles.description}>
            With our app, you can easily track your income and expenses, make
            informed decisions about your money.
          </Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp" // Animación predeterminada de animatable
          duration={1000} // Duración de la animación
          delay={800} // Retraso antes de iniciar la animación
          style={styles.unlockContainer}
        >
          {/* Slider de desbloqueo */}
          <View style={styles.unlockContainer}>
            <SwipeToStart onStart={handleStart} />
          </View>
        </Animatable.View>
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
  unlockContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  boldText: {
    fontFamily: "Manrope-Bold", // Estilo negrita para parte del título
  },
  animatedTextContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  animatedText: {
    fontSize: 18,
    color: "white",
  },
});
