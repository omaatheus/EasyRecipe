import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import theme from '../../../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Header({showBackButton}) {

  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      { showBackButton && <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name='keyboard-arrow-left' size={50} color={theme.colors.BLACK_GREEN}/>
      </TouchableOpacity> }
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        backgroundColor: theme.colors.LIMA,
        justifyContent: 'center',
    },
});