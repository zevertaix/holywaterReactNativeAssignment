import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";
import ArrowRightSVG from "../../assets/icons/ArrowRightSVG";
import { LastBook } from "../../redux/reducers/userSlice";

interface LastBookItem {
  lastBook: LastBook;
}

export default ({ lastBook }: LastBookItem) => {
  const { navigate } = useNavigation<NavigationProp<StackParams>>();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        lastBook ? navigate("BookDetails", { book: lastBook.book }) : null
      }
    >
      <View style={styles.content}>
        <Image
          source={{ uri: lastBook?.book.image }}
          style={{ aspectRatio: 2 / 3, height: 50, borderRadius: 4 }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.continueLabel}>Continue reading</Text>
          <Text style={styles.title}>{lastBook?.book.name}</Text>
        </View>
      </View>
      <View>
        <ArrowRightSVG />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: colors.divider,
    paddingVertical: 6,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  continueLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.secondaryText,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primaryText,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});
