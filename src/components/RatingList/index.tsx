import React from "react";
import { FlatList, View } from "react-native";
import Divider from "../Divider";
import RowBookItem from "../RowBookItem";
import { Book } from "../../api/discover/types";

interface RatingListProps {
  data: Book[];
}

export default ({ data }: RatingListProps) => {
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
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 14,
      }}
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
                />
              );
            })}
          </View>
        );
      }}
    />
  );
};
