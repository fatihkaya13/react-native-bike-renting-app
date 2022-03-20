import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CreditScreen from "./screens/CreditScreen";
import HistoryScreen from "./screens/HistoryScreen";
import MapStack from "./screens/MapStack";
import { Provider } from "react-redux";
import { store } from "./store";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const BottomTab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab.Navigator  initialRouteName="Map">
          <BottomTab.Screen
            name="Credit"
            component={CreditScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/money.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#8a2be2" : "#748c94",
                  }}
                />
              ),
            }}
            tabBarIcon={{}}
          />
          <BottomTab.Screen
            name="Map"
            component={MapStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/bottom-maps.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#8a2be2" : "#748c94",
                  }}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="History"
            component={HistoryScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/history.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#8a2be2" : "#748c94",
                  }}
                />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </Provider>
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
