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
      style={{
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
      }}
      onPress={() =>
        lastBook ? navigate("BookDetails", { book: lastBook.book }) : null
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: lastBook?.book.image }}
          style={{ aspectRatio: 2 / 3, height: 50, borderRadius: 4 }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.secondaryText,
            }}
          >
            Continue reading
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.primaryText,
            }}
          >
            His blonde little secret
          </Text>
        </View>
      </View>
      <View>
        <ArrowRightSVG />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
