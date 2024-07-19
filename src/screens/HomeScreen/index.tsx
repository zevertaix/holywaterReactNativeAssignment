import React from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchSVG from "../../assets/icons/SearchSVG";
import colors from "../../theme";
import { BOOK_LIST_MOCK } from "../../mock/bookList";
import { BookItem, CategoryHeader, Divider } from "../../components";
import { FlatList } from "react-native-gesture-handler";

export default () => {
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
        ItemSeparatorComponent={() => <Divider vertical />}
        renderSectionHeader={({ section: { title, isBanner, data } }) => {
          return (
            <View>
              {!isBanner && <CategoryHeader title={title} />}
              <FlatList
                data={data}
                horizontal
                ItemSeparatorComponent={() => <Divider />}
                contentContainerStyle={{
                  paddingHorizontal: 20,
                  paddingVertical: 14,
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <BookItem
                      name={item.name}
                      url={item.image}
                      isBanner={!!isBanner}
                      price={item.price}
                    />
                  );
                }}
              />
            </View>
          );
        }}
      />
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
