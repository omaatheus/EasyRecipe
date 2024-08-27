import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../theme";

export function InfoCard({title, icon, remove, onPress}) {

    const displayTitle = typeof title === 'string' ? title : JSON.stringify(title);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{displayTitle}</Text>
        <TouchableOpacity onPress={onPress}>
        <MaterialIcons 
          name={icon} 
          size={30} 
          color={theme.colors.WHITE} 
          style={remove ? styles.iconRed : styles.icon} 
        />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  card: {
    backgroundColor: theme.colors.GRAY_200,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    color: theme.colors.BLACK_GREEN,
    fontSize: 16,
    flex: 1,
  },
  icon: {
    backgroundColor: theme.colors.BLACK_GREEN,
    borderRadius: 10,
    padding: 10,
  },
  iconRed: {
    backgroundColor: theme.colors.RED,
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden'
  },
});
