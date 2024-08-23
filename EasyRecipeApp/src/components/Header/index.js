import React from "react";
import { View, Image, StyleSheet } from "react-native";
import theme from "../../../theme";

export function Header() {
  return (
    <View style={styles.header}>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "15%",
        backgroundColor: theme.colors.LIMA,
    },
});
