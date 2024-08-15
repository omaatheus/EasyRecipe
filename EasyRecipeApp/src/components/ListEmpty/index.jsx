import { StyleSheet, View, Text } from "react-native";
import theme from "../../../theme";

export function ListEmpty(message){
    return(
        <View style={styles.content}>
            <Text style={styles.mensage}>
                {message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mensage: {
        textAlign: 'center',
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.M,
        color: theme.colors.GRAY_300,
    }
});
