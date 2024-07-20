import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../theme";
import { kFormatter } from "../../helpers/formatters";
import CImage from "../CImage";

interface RowBookItemProps {
  name: string;
  image: string;
  position: number;
  reads: number;
  genre: string;
  onPress: () => void;
}

export default ({
  name,
  image,
  position,
  reads,
  genre,
  onPress,
}: RowBookItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <CImage url={image} style={styles.image} />
      <Text style={styles.positionLabel}>{position}</Text>
      <View style={{ gap: 3 }}>
        <Text style={styles.genreLabel}>{genre.toUpperCase()}</Text>
        <Text style={styles.nameLabel}>{name}</Text>
        <Text style={styles.readsLabel}>{kFormatter(reads)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    aspectRatio: 2 / 3,
    height: 120,
    borderRadius: 4,
  },
  positionLabel: {
    fontSize: 38,
    fontWeight: "700",
    color: colors.tertiaryText,
    paddingHorizontal: 24,
  },
  genreLabel: {
    fontWeight: "700",
    fontSize: 12,
    color: colors.accent,
  },
  nameLabel: {
    fontWeight: "600",
    fontSize: 15,
    color: colors.primaryText,
  },
  readsLabel: {
    fontSize: 13,
    color: colors.tertiaryText,
  },
});
