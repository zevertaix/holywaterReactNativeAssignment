import React from "react";
import { StyleSheet, View } from "react-native";

interface DividerProps {
  vertical?: boolean;
}

export default ({ vertical }: DividerProps) => {
  return <View style={[styles.divider, vertical && { height: 20 }]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: 18,
  },
});
