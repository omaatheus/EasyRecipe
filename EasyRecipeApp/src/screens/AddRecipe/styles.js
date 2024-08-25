import { StyleSheet } from "react-native"
import theme from "../../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonAdd: {
        width: "40%",
        height: "auto",
        margin: "5%",
        padding: "3%",
        borderRadius: 10,
        backgroundColor: theme.colors.LIGHT_GREEN,
        
    },
    buttonAddText: {
        textAlign: "center",
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.SM,
        color: theme.colors.WHITE,
    },
})