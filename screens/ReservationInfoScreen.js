import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_API_KEY } from "@env";

import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const ReservationInfoScreen = () => {
  const dispatch = useDispatch();

  const fetchGeoLocationHandler = () => {
    dispatch(
      setOrigin({
        description: "Caddebostan",
        location: {
          lat: 40.9679267,
          lng: 29.0619934,
        },
      })
    );
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            langauge: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <TouchableOpacity onPress={fetchGeoLocationHandler}>
          <View style={tw`p-5 flex-row items-center`}>
            <Image
              style={{
                marginLeft: 0,
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
              source={require("../assets/location.png")}
            />
            <Text style={tw`m-2 text-lg `}>Get current location</Text>
          </View>
        </TouchableOpacity>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default ReservationInfoScreen;
