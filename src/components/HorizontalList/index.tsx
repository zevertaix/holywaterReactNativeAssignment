import React from "react";
import { FlatList } from "react-native";
import Divider from "../Divider";
import BookItem from "../BookItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";
import { Book } from "../../api/discover/types";
import { useAppDispatch } from "../../redux/hooks";
import { setLastBook } from "../../redux/reducers/userSlice";

interface HorizontalListProps {
  data: Book[];
  isBanner: boolean;
}

export default ({ data, isBanner }: HorizontalListProps) => {
  const { navigate } = useNavigation<NavigationProp<StackParams>>();
  const dispatch = useAppDispatch();

  return (
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
            onPress={() => {
              dispatch(setLastBook(null));
              navigate("BookDetails", { book: item });
            }}
            name={item.name}
            image={item.image}
            isBanner={!!isBanner}
            price={item.price}
          />
        );
      }}
    />
  );
};
