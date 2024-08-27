import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import React from "react";
import theme from "../../theme";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.BLACK_GREEN} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BEGE,
    alignItems: "center",
    justifyContent: "center",
  },
});
