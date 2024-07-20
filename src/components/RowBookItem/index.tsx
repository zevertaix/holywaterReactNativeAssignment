import React from "react";
import { Pressable, Text, View } from "react-native";
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
    <Pressable
      style={{ flexDirection: "row", alignItems: "center" }}
      onPress={onPress}
    >
      <CImage
        url={image}
        style={{ aspectRatio: 2 / 3, height: 120, borderRadius: 4 }}
      />
      <Text
        style={{
          fontSize: 38,
          fontWeight: "700",
          color: colors.tertiaryText,
          paddingHorizontal: 24,
        }}
      >
        {position}
      </Text>
      <View style={{ gap: 3 }}>
        <Text style={{ fontWeight: "700", fontSize: 12, color: colors.accent }}>
          {genre.toUpperCase()}
        </Text>
        <Text
          style={{ fontWeight: "600", fontSize: 15, color: colors.primaryText }}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 13, color: colors.tertiaryText }}>
          {kFormatter(reads)}
        </Text>
      </View>
    </Pressable>
  );
};
