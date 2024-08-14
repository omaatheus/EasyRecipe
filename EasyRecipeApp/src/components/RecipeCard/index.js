import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../../theme";

export function RecipeCard({image, title, subtitle}) {
  return (
    <View style={styles.card}>
        <Image style={styles.cardImage} source={image}/>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 120,
        marginVertical: 10,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: theme.colors.LIGHT_GREEN,
    },

    cardImage: {
        width: "35%",
        height: "80%",
        marginHorizontal: 20,
        borderRadius: 20,
    },

    textContainer: {
      width: "auto",
      height: "auto",
    },

    cardTitle: {
        textAlign: "left",
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
    },

    cardSubtitle: {
        textAlign: "left",
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.LG,
        color: theme.colors.LIMA,
    },
});
