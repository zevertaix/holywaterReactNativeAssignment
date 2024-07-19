import React, { useMemo } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import colors from "../../theme";

interface BookItemProps {
  name: string;
  image: string;
  isBanner: boolean;
  price: number;
  onPress: () => void;
}

export default ({ name, image, isBanner, price, onPress }: BookItemProps) => {
  const { width } = useWindowDimensions();
  const cardWidth = isBanner ? width - 80 : width / 2 - 40;

  return (
    <Pressable style={{ width: cardWidth }} onPress={onPress}>
      {isBanner && (
        <>
          <Text style={styles.priceLabel}>
            {price === 0 ? "FREE" : `${price.toString().toUpperCase()} $`}
          </Text>
          <Text style={styles.nameBannerLabel}>{name}</Text>
        </>
      )}

      <Image
        source={{ uri: image }}
        style={{
          aspectRatio: isBanner ? 16 / 9 : 2 / 3,
          borderRadius: 8,
        }}
      />

      {!isBanner && (
        <>
          <Text style={styles.nameLabel}>{name}</Text>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  priceLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.accent,
  },
  nameBannerLabel: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.primaryText,
    marginBottom: 12,
    marginTop: 3,
  },
  nameLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.tertiaryText,
    flexWrap: "wrap",
    marginTop: 7,
  },
});
