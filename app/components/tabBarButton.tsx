import { StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabBarButton({
  onPress,
  onLongPress,
  isFocused,
  iconName,
  color,
  label,
}: {
  onPress: Function;
  onLongPress: Function;
  isFocused: Boolean;
  iconName: any;
  color: string;
  label: string;
}) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Pressable
      style={styles.tabBarIconContainer}
      onPress={(event) => onPress(event)} 
      onLongPress={(event) => onLongPress(event)}
    >
      <Animated.View style={[animatedIconStyle]}>
        <Ionicons name={iconName} size={24} style={[{ color }]} />
      </Animated.View>
      <Animated.Text style={[{ color, fontSize: 13 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabBarIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
