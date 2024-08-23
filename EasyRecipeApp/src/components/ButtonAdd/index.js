import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../../theme";

export function ButtonAdd({props, title}) {
  return (
    <TouchableOpacity style={styles.buttonAdd} onPress={props}>
        <Text style={styles.buttonAddText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonAdd: {
        width: "90%",
        height: 50,
        margin: "5%",
        padding: "3%",
        borderRadius: 10,
        backgroundColor: theme.colors.LIMA,
    },

    buttonAddText: {
        textAlign: "center",
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
    },
});
