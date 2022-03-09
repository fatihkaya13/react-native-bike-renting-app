import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
  selectOrigin,
  selectDestination,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";

import Constants from "expo-constants";
import * as Location from "expo-location";

const Map = () => {
  const dotImage = require("../assets/bike.png");
  const dispatch = useDispatch();

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;
    // zoom and fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  // console.log(origin);
  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destination.description}
      &key=${GOOGLE_MAPS_API_KEY}`;

      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_API_KEY]);
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
          pinColor="blue"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat + 0.005,
            longitude: origin.location.lng - 0.00008,
          }}
          title="Available Bike"
          identifier="origin"
          image={require("../assets/rental-4.png")}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat + 0.009,
            longitude: origin.location.lng - 0.004,
          }}
          title="Available Bike"
          identifier="origin"
          image={require("../assets/rental-4.png")}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat - 0.0007,
            longitude: origin.location.lng - 0.0009,
          }}
          title="Available Bike"
          identifier="origin"
          image={require("../assets/rental-4.png")}
          onPress={() => alert("bike is ready")}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat + 0.0096,
            longitude: origin.location.lng - 0.0009,
          }}
          title="Available Bike"
          identifier="origin"
          image={require("../assets/rental-4.png")}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
