import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../../theme';
import { MaterialIcons } from '@expo/vector-icons';

export function InputAdd({onAdd}) {
  return (
    <View style={styles.inputAdd}>
        <TextInput
            style={styles.input}
            maxLength={30}
            returnKeyType='done'
            blurOnSubmit={true}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={onAdd}>
            <MaterialIcons name='add' size={50} color={theme.colors.WHITE}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    inputAdd: {
        width: '90%',
        height: 'auto',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.GRAY_200,
    },

    input: {
        width: '85%',
        height: 50,
        padding: '3%',
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },

    buttonAdd: {
        width: '15%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.BLACK_GREEN,
    },
});