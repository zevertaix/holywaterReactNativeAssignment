import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import colors from "../../theme";

interface PrimaryButton {
  onPress: () => void;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export default ({
  onPress,
  title,
  containerStyle,
  titleStyle,
  disabled = false,
}: PrimaryButton) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        disabled && { backgroundColor: colors.disabled },
        containerStyle,
      ]}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 50,
    marginTop: 30,
  },
  title: {
    color: colors.white,
    fontWeight: "800",
    fontSize: 17,
  },
});
