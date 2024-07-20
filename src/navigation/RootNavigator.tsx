import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { BookScreen } from "../screens";
import { Book } from "../api/discover/types";

const Stack = createStackNavigator<StackParams>();

export type StackParams = {
  MainTabs: undefined;
  BookDetails: { book: Book };
};

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen
        name="BookDetails"
        component={BookScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
