import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TourScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TourScreen</Text>
    </View>
  );
};

export default TourScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
