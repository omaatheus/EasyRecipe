import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../../../theme";
import { X } from 'phosphor-react-native';


export function IngredientsCard({onRemove, ingredient}) {
  return (
    <View style={styles.ingredientsCard}>
        <Text style={styles.text}>{ingredient}</Text>

        <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
            <X size={25} weight="bold" color={theme.colors.GRAY_200}></X>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    ingredientsCard: {
        width: "90%",
        height: "auto",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.GRAY_200,
    },

    text: {
        width: "85%",
        height: "auto",
        padding: "3%",
        textAlignVertical: "top",
        borderRadius: 10,
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },

    buttonRemove: {
        width: "15%",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
});
