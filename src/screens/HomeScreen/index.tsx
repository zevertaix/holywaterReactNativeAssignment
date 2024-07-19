import React, { useEffect } from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchSVG from "../../assets/icons/SearchSVG";
import colors from "../../theme";
import { BOOK_LIST_MOCK } from "../../mock/bookList";
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
  selectBookStatuses,
} from "../../redux/reducers/booksSlice";

export default () => {
  const lastBook = useAppSelector(selectLastBook);
  const queryStatuses = useAppSelector(selectBookStatuses);
  const [bookList, setBookList] = React.useState<BookResponse>([]);
  const dispatch = useAppDispatch();

  const getNewsletters = async () => {
    const response = await dispatch(fetchBooksList()).unwrap();
    setBookList(response);
  };

  useEffect(() => {
    getNewsletters();
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {queryStatuses.booksLoading && <FullScreenLoader />}
      <View style={styles.header}>
        <View style={{ alignItems: "flex-end" }}>
          <Pressable onPress={() => null}>
            <SearchSVG width={24} height={24} />
          </Pressable>
        </View>
        <Text style={styles.title}>Discover</Text>
      </View>
      <SectionList
        sections={bookList}
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
