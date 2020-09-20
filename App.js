import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import DateTimeComponent from "./components/DateTimeComponent";
import NewDateTimeComponent from "./components/NewDateTimeComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <DateTimeComponent />
      {/* <NewDateTimeComponent /> */}
    </View>
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
