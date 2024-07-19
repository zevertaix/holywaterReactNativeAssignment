import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import colors from "../../theme";

interface BookItemProps {
  name: string;
  url: string;
  isBanner: boolean;
  price: number;
}

export default ({ name, url, isBanner, price }: BookItemProps) => {
  const { width } = useWindowDimensions();
  const cardWidth = isBanner ? width - 80 : width / 2 - 40;

  return (
    <View style={{ width: cardWidth }}>
      {isBanner && (
        <>
          <Text style={styles.priceLabel}>
            {price === 0 ? "FREE" : `${price.toString().toUpperCase()} $`}
          </Text>
          <Text style={styles.nameBannerLabel}>{name}</Text>
        </>
      )}

      <Image
        source={{ uri: url }}
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
    </View>
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
