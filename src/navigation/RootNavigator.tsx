import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { BookScreen } from "../screens";
import { Pressable } from "react-native";
import CrossSVG from "../assets/icons/CrossSVG";
import colors from "../theme";

const Stack = createStackNavigator<StackParams>();

export type StackParams = {
  MainTabs: undefined;
  BookDetails: undefined;
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
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
