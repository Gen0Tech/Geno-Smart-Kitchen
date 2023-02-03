import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Image Object Detection Demo</Text>
        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            This app uses AI trained model to detect food in kitchen rack.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  getStartedContainer: {
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 40,
  },
  codeHighlightContainer: {
    marginTop: 20,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 20,
  },
  demoContainer: {
    alignItems: "flex-start",
  },
  demoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
