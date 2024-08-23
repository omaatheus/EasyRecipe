import { StyleSheet } from "react-native";
import theme from "../../../theme";

const { colors, font_family, font_size } = theme

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BEGE,
        justifyContent: 'center',
    },

    main: {
        width: "100%",
        height: "85%",
        alignItems: 'center',
    },

    inputContainer: {
        width: "100%",
        height: "70%",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        width: "90%",
        height: "auto",
        textAlign: "left",
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
    },
})