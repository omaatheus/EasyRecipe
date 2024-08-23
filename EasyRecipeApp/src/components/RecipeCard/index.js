import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../../theme";

export function RecipeCard({image, title, subtitle}) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.cardImage} source={image}/>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 120,
        marginVertical: 10,
        borderRadius: 20,
        alignSelf: "center",
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
        backgroundColor: theme.colors.LIMA,
    },

    textContainer: {
      width: "51%",
      height: "100%",
      alignItems: 'flex-start',
      justifyContent: 'center'
    },

    cardTitle: {
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,

    },

    cardSubtitle: {
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.MD,
        color: theme.colors.LIMA,
        
    },
});
