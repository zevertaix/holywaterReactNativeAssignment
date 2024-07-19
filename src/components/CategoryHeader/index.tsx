import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../theme";
import ArrowRightSVG from "../../assets/icons/ArrowRightSVG";

interface CategoryHeaderProps {
  title: string;
}

export default ({ title }: CategoryHeaderProps) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Pressable style={styles.button} onPress={() => null}>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightSVG />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: colors.primaryText,
    fontWeight: "800",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
