import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CreditScreen from "./screens/CreditScreen";
import HistoryScreen from "./screens/HistoryScreen";
import MapStack from "./screens/MapStack";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Credit"
          component={CreditScreen}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name="Map"
          component={MapStack}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name="History"
          component={HistoryScreen}
          options={{ headerShown: false }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

