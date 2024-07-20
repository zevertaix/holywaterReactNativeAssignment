import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FenceSVG from "../../assets/icons/FenceSVG";
import colors from "../../theme";

export default () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.floatContainer}>
        <Text style={styles.title}>Coming Soon...</Text>
        <FenceSVG width={300} height={300} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: colors.tertiaryText,
  },
  floatContainer: {
    position: "absolute",
    alignItems: "center",
    gap: 20,
  },
});
