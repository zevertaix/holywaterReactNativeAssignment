import React from "react";
import {
  Image,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchSVG from "../../assets/icons/SearchSVG";
import colors from "../../theme";
import { BOOK_LIST_MOCK } from "../../mock/bookList";
import { CategoryHeader, Divider, HorizontalList } from "../../components";
import RatingList from "../../components/RatingList";
import { useAppSelector } from "../../redux/hooks";
import { selectLastBook } from "../../redux/reducers/userSlice";
import ArrowRightSVG from "../../assets/icons/ArrowRightSVG";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";

export default () => {
  const lastBook = useAppSelector(selectLastBook);
  const { navigate } = useNavigation<NavigationProp<StackParams>>();

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignItems: "flex-end" }}>
          <Pressable onPress={() => null}>
            <SearchSVG width={24} height={24} />
          </Pressable>
        </View>
        <Text style={styles.title}>Discover</Text>
      </View>
      <SectionList
        sections={BOOK_LIST_MOCK}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => index + item.name}
        renderItem={() => null}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider vertical />}
        renderSectionHeader={({
          section: { title, isBanner, data, isTop },
        }) => {
          return (
            <View>
              {!isBanner && (
                <CategoryHeader
                  title={title}
                  onPress={isTop ? null : () => null}
                />
              )}
              {isTop ? (
                <RatingList data={data} />
              ) : (
                <HorizontalList data={data} isBanner={!!isBanner} />
              )}
            </View>
          );
        }}
      />
      {lastBook && (
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
          onPress={() => navigate("BookDetails", { book: lastBook.book })}
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
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.primaryText,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: colors.divider,
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});
