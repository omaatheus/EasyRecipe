import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import theme from "../../../theme";

export function Filter({title, isActive, onPress}){
    return(

        <View>
            {isActive ?
        <TouchableOpacity onPress={onPress} style={style.containerBg}>
             
            <Text style={style.titleIsActived}>
                {title}
            </Text> 
        </TouchableOpacity>

        :

        <TouchableOpacity onPress={onPress} style={style.container}>
             
            <Text style={style.title}>
            {title}
            </Text> 
        
        </TouchableOpacity>

        }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: theme.colors.LIGHT_GREEN,
        borderRadius: 4,
        marginRight: 12,
        height: 38,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 45,
    },
    containerBg: {
        borderWidth: 1,
        borderColor: theme.colors.LIGHT_GREEN,
        backgroundColor: theme.colors.LIGHT_GREEN,
        borderRadius: 4,
        marginRight: 12,
        height: 38,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    title: {
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.SM,
        color: theme.colors.LIGHT_GREEN
    },
    titleIsActived: {
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.SM,
        color: theme.colors.WHITE
    }
    

})