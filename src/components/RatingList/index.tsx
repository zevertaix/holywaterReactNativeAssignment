import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Divider from "../Divider";
import RowBookItem from "../RowBookItem";
import { Book } from "../../api/discover/types";
import { useAppDispatch } from "../../redux/hooks";
import { setLastBook } from "../../redux/reducers/userSlice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";

interface RatingListProps {
  data: Book[];
}

export default ({ data }: RatingListProps) => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<NavigationProp<StackParams>>();
  const getRaitedBooks = () => {
    const sorted = data.sort((a: any, b: any) => a.position - b.position);
    const chunkSize = 3;
    const result = [];

    for (let i = 0; i < sorted.length; i += chunkSize) {
      const chunk = sorted.slice(i, i + chunkSize);
      result.push({ data: chunk });
    }

    return result;
  };

  return (
    <FlatList
      data={getRaitedBooks()}
      horizontal
      ItemSeparatorComponent={() => <Divider />}
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={{ gap: 16 }}>
            {item.data.map((el: Book, i: number) => {
              return (
                <RowBookItem
                  key={i}
                  name={el.name}
                  image={el.image}
                  position={el.position || 1}
                  reads={el.reads || 0}
                  genre={el.genre || ""}
                  onPress={() => {
                    dispatch(setLastBook(null));
                    navigate("BookDetails", { book: el });
                  }}
                />
              );
            })}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});
