import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapsScreen</Text>
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
