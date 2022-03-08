import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const NavOptions = () => {
  return (
    <TouchableOpacity
      style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-80 rounded`}
    >
      <View style={tw`${"opacity-20"}`}>
        <Image
          style={{ width: 120, height: 120, resizeMode: "contain" }}
          source={require("../assets/bike.png")}
        />
        <Text style={tw`mt-2 text-lg font-semibold`}>Reserve a bike</Text>
        <Icon
          style={tw`p-2 bg-purple-600 rounded-full w-10 mt-4`}
          name="arrowright"
          color="white"
          type="antdesign"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
