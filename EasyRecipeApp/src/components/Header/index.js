import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../../theme";
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export function Header({showBackButton}) {

  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      { showBackButton && <TouchableOpacity onPress={() => navigation.popToTop()}>
        <MaterialIcons name="keyboard-arrow-left" size={50}/>
      </TouchableOpacity> }
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "15%",
        backgroundColor: theme.colors.LIMA,
        justifyContent: 'center'
    },
    logo: {
        width: "auto",
        height: "100%",
        resizeMode: "contain",
    },
});
