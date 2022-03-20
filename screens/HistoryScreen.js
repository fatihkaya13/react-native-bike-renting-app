import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";

const HistoryScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 flex-row items-center rounded`}>
        <Text style={tw`m-1 text-lg `}>My Trips</Text>
      </View>

      <View
        style={tw`flex-row justify-between items-center px-10 border rounded py-10`}
      >
        <Image
          style={{ width: 60, height: 60, resizeMode: "contain" }}
          source={require("../assets/map-stats.png")}
        />
        <View style={tw``}>
          <Text style={tw`text-purple-600 text-xl font-semibold pl-1`}>2.3 km</Text>
          <Text style={tw`text-gray-600`}> Credits Spent: 1 X 1 hour</Text>
          <Text style={tw`text-gray-600`}> From Cadde to Sahil</Text>
        </View>
        <Text style={tw`pl-2`}>2022.03.21</Text>
      </View>

      <View
        style={tw`flex-row justify-between items-center px-10 border rounded py-10 mt-4`}
      >
        <Image
          style={{ width: 60, height: 60, resizeMode: "contain" }}
          source={require("../assets/map-stats.png")}
        />
        <View style={tw``}>
          <Text style={tw`text-purple-600 text-xl font-semibold pl-1`}>4.7 km</Text>
          <Text style={tw`text-gray-600`}> Credits Spent: 1 X 1 hour</Text>
          <Text style={tw`text-gray-600`}> From Home to School</Text>
        </View>
        <Text style={tw`pl-2`}>2022.03.22</Text>
      </View>

      <View style={tw`pl-3 pt-3 flex-row items-center rounded`}>
        <Text style={tw`m-1 text-lg `}>All time highlights</Text>
      </View>

      <View style={tw`flex-row justify-between items-center px-10 py-5`}>
        <View style={tw``}>
          <Text style={tw`text-purple-600 text-xl font-semibold pl-1`}>Time spent</Text>
          <Text style={tw`text-gray-600 p-1`}> 45 hours and 41 minutes</Text>
          <Text style={tw`text-purple-600 text-xl font-semibold pl-1 mt-1`}>Distance</Text>
          <Text style={tw`text-gray-600 p-1`}> 230 kilometers and 3 meters</Text>
          <Text style={tw`text-purple-600 text-xl font-semibold pl-1 mt-1`}>Credits spent</Text>
          <Text style={tw`text-gray-600 p-1`}> 36 credits of 1 hour</Text>
          <Text style={tw`text-gray-600 p-1`}> 5 credits of 2 hours</Text>
        </View>
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex justify-between bg-purple-600  w-60 h-10 px-4 py-3 rounded`}
        >
          <Text style={tw`text-white text-center`}>View breakdown</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
