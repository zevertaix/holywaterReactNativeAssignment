import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BestsellersScreen,
  FavoritesScreen,
  HomeScreen,
  ProfileScreen,
} from "../screens";
import BookmarkSVG from "../assets/icons/BookmarkSVG";
import ExploreSVG from "../assets/icons/ExploreSVG";
import colors from "../theme";
import AwardSVG from "../assets/icons/AwardSVG";
import ProfileSVG from "../assets/icons/ProfileSVG";
import { Pressable, View } from "react-native";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: ({ focused }) =>
          focused ? (
            <View
              style={{
                backgroundColor: colors.accent,
                borderRadius: 10,
                width: 5,
                height: 5,
              }}
            />
          ) : null,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BookmarkSVG color={focused ? colors.accent : colors.primaryText} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ExploreSVG color={focused ? colors.accent : colors.primaryText} />
          ),
        }}
      />
      <Tab.Screen
        name="Bestsellers"
        component={BestsellersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AwardSVG color={focused ? colors.accent : colors.primaryText} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileSVG color={focused ? colors.accent : colors.primaryText} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
