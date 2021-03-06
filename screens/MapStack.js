import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import ReservationInfoScreen from "./ReservationInfoScreen";
import MapScreen from "./MapScreen";
import TourScreen from "./TourScreen";

const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -5 : 0}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="ReservationInfoScreen"
            component={ReservationInfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TourScreen"
            component={TourScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default MapStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
