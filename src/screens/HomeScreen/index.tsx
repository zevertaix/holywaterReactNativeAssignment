import React, { useEffect } from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchSVG from "../../assets/icons/SearchSVG";
import colors from "../../theme";
import {
  CategoryHeader,
  Divider,
  FullScreenLoader,
  HorizontalList,
  LastBookItem,
} from "../../components";
import RatingList from "../../components/RatingList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectLastBook } from "../../redux/reducers/userSlice";
import { BookResponse } from "../../api/discover/types";
import {
  fetchBooksList,
  selectBookList,
  selectBookStatuses,
} from "../../redux/reducers/booksSlice";

export default () => {
  const lastBook = useAppSelector(selectLastBook);
  const bookList = useAppSelector(selectBookList);
  const queryStatuses = useAppSelector(selectBookStatuses);
  const [list, setList] = React.useState<BookResponse>([]);
  const dispatch = useAppDispatch();

  const getBooks = async () => {
    dispatch(fetchBooksList());
  };

  useEffect(() => {
    if (bookList) {
      setList(bookList);
    }
  }, [bookList]);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {!bookList && <FullScreenLoader />}
      <View style={styles.header}>
        <View style={{ alignItems: "flex-end" }}>
          <Pressable onPress={() => null}>
            <SearchSVG width={24} height={24} />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Discover</Text>
          {queryStatuses?.booksLoading && bookList && (
            <Text
              style={{ fontSize: 12, fontWeight: "500", color: colors.accent }}
            >
              Updating...
            </Text>
          )}
        </View>
      </View>
      <SectionList
        sections={list}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => index + item.name}
        renderItem={() => null}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider vertical />}
        contentContainerStyle={lastBook && { paddingBottom: 20 }}
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
      {lastBook && <LastBookItem lastBook={lastBook} />}
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
