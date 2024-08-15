import { TextInput, StyleSheet } from "react-native";
import React from "react";
import theme from "../../../theme";

export function Input({showBigInput}) {
  return (
    <TextInput
        style={showBigInput ? styles.bigInput : styles.input}
    />
  );
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: "auto",
        padding: "3%",
        textAlignVertical: "top",
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },

    bigInput: {
        width: "90%",
        height: 140,
        padding: "3%",
        textAlignVertical: "top",
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },
});
