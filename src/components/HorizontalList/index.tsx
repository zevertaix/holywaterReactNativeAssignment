import React from "react";
import { FlatList } from "react-native";
import Divider from "../Divider";
import BookItem from "../BookItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";

interface HorizontalListProps {
  data: any;
  isBanner: boolean;
}

export default ({ data, isBanner }: HorizontalListProps) => {
  const { navigate } = useNavigation<NavigationProp<StackParams>>();

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
            onPress={() => navigate("BookDetails")}
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
