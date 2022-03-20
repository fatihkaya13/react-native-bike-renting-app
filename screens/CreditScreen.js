import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Credit = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 flex-row items-center rounded`}>
        <Text style={tw`m-1 text-lg `}>Available credits</Text>
      </View>
      <View style={tw`p-5`}>
        <View style={tw`p-5 flex-row items-center border rounded py-2`}>
          <Text style={tw`m-1 text-lg `}>1 hour - 5 credits remaining</Text>
        </View>
        <View style={tw`p-5 flex-row items-center border rounded mt-2 py-2`}>
          <Text style={tw`m-1 text-lg `}>2 hours - 1 credit remaining</Text>
        </View>
      </View>

      <View style={tw`p-5 `}>
        <Text style={tw`m-1 text-lg `}>Choose hours of credit:</Text>
      </View>

      <View style={tw`p-5 flex-row justify-evenly`}>
        <TouchableOpacity
          style={tw`p-5 flex-row items-center border rounded py-2 bg-purple-200 border-purple-200`}
        >
          <Text style={tw`m-1`}>1 hour - $2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`p-5 flex-row items-center border rounded py-2 border-purple-200`}
        >
          <Text style={tw`m-1`}>2 hours - $3.5</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`p-5`}>
        <Text style={tw`m-1 text-lg `}>Choose payment:</Text>
        <View style={tw`p-5`}>
          <TouchableOpacity
            style={tw`w-60 border rounded border-red-400 bg-red-200`}
          >
            <Text style={tw`p-2`}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-60 border mt-2 rounded`}>
            <Text style={tw`p-2`}>Paypal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-60 border mt-2 rounded`}>
            <Text style={tw`p-2`}>Google Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-60 border mt-2 rounded`}>
            <Text style={tw`p-2`}>Apple Pay</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex justify-between bg-purple-600  w-60 h-10 px-4 py-3 rounded`}
        >
          <Text style={tw`text-white text-center`}>Buy credit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Credit;

const styles = StyleSheet.create({});
