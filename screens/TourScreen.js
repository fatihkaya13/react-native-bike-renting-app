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

const TourScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <View
          style={tw`p-5 flex-row items-center border border-gray-200 rounded py-2`}
        >
          <Text style={tw`m-1 text-lg`}>Attend a tour</Text>
        </View>
      </View>

      <View style={tw`pl-5`}>
        <Text>Or you may select from suggested routes:</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-purple-200 m-2 w-40 rounded`}
        >
          <View>
            <Image
              style={{ width: 60, height: 60, resizeMode: "contain" }}
              source={require("../assets/sun.png")}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              Perfect for summer
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-purple-200 m-2 w-40 rounded`}
        >
          <View>
            <Image
              style={{ width: 60, height: 60, resizeMode: "contain" }}
              source={require("../assets/gyeongbokgung-palace.png")}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              Cultural destinations
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-purple-200 m-2 w-40 rounded`}
        >
          <View>
            <Image
              style={{ width: 60, height: 60, resizeMode: "contain" }}
              source={require("../assets/park.png")}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              Parks
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-purple-200 m-2 w-40 rounded`}
        >
          <View>
            <Image
              style={{ width: 60, height: 60, resizeMode: "contain" }}
              source={require("../assets/loyalty.png")}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              Popular
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-purple-200 m-2 w-40 rounded`}
        >
          <View>
            <Image
              style={{ width: 60, height: 60, resizeMode: "contain" }}
              source={require("../assets/burger.png")}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              Food Trip
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-purple-200 m-2 w-40 rounded`}
        >
          <View>
            <Image
              style={{ width: 60, height: 60, resizeMode: "contain" }}
              source={require("../assets/museum.png")}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              Museums
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex justify-between bg-purple-600  w-60 h-10 px-4 py-3 rounded`}
        >
          <Text style={tw`text-white text-center`}>Start Tour</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TourScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",

    justifyContent: "center",
  },
});
