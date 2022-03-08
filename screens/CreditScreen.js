import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Credit = () => {
  return (
    <View style={styles.container}>
      <Text>Credit screen</Text>
    </View>
  );
};

export default Credit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
