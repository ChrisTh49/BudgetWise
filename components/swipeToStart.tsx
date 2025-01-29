import { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  LayoutChangeEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SLIDER_WIDTH = 50;
const SLIDER_MARGIN = 12;

type Props = {
  onStart: () => void;
};

const SwipeToStart = ({ onStart }: Props) => {
  const distance = useRef(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    distance.current = width - SLIDER_WIDTH - SLIDER_MARGIN * 2;
  };
  const translationX = useRef(new Animated.Value(0)).current;

  const release = () => {
    Animated.spring(translationX, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) {
          translationX.setValue(0);
        } else if (gestureState.dx < -distance.current) {
          translationX.setValue(-distance.current);
        } else {
          translationX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -distance.current) {
          onStart();
        }

        release();
      },
    })
  ).current;
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={styles.text}>Get Started</Text>
      <Animated.View
        style={[styles.slider, { transform: [{ translateX: translationX }] }]}
        {...panResponder.panHandlers}
      >
        <Ionicons
          name="arrow-forward"
          size={30}
          color="#FCFCFC"
          style={{ left: 10 }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    borderRadius: 44,
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 100,
    position: "relative",
    paddingLeft: 20,
  },
  text: {
    color: "#FCFCFC",
    fontSize: 22,
    fontWeight: "600",
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 50,
    fontFamily: "Manrope-Regular",
  },
  slider: {
    backgroundColor: "#723FEB",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 44,
    width: 50,
    height: 50,
    position: "absolute",
    left: 10,
  },
});

export default SwipeToStart;
