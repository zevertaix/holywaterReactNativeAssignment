/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import { FullScreenLoader } from "./src/components";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<FullScreenLoader />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
