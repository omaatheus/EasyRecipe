import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from "react";
import theme from "../../theme";

export function ButtonAdd({props, title, add=true}) {
  return (

    <View>
      { add ? <TouchableOpacity style={styles.buttonAdd} onPress={props}>
        <Text style={styles.buttonAddText}>{title}</Text>
    </TouchableOpacity>
    :
    <TouchableOpacity style={styles.buttonRemove} onPress={props}>
        <Text style={styles.buttonRemoveText}>{title}</Text>
    </TouchableOpacity>
  }
    
    </View>
  );
}

const styles = StyleSheet.create({
    buttonAdd: {
        width: "90%",
        height: "auto",
        margin: "5%",
        padding: "3%",
        borderRadius: 10,
        backgroundColor: theme.colors.LIMA,
        
    },
    buttonRemove: {
        width: "90%",
        height: "auto",
        margin: "5%",
        padding: "3%",
        borderRadius: 10,
        backgroundColor: theme.colors.RED,
        
    },

    buttonAddText: {
        textAlign: "center",
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
    },
    buttonRemoveText: {
        textAlign: "center",
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.WHITE,
    },
});
