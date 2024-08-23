import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../../../theme';

export function Highlight({title, subtitle}) {
  return (
    <View style={styles.highlightContainer}>
        <Text style={styles.highlightTitle}>{title}</Text>
        <Text style={styles.highlightSubtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    highlightContainer: {
      width: '100%',
      height: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    highlightTitle: {
      textAlign: 'center',
      fontFamily: theme.font_family.BOLD,
      fontSize: theme.font_size.XXL,
      color: theme.colors.BLACK_GREEN,
    },

    highlightSubtitle: {
      textAlign: 'center',
      fontFamily: theme.font_family.REGULAR,
      fontSize: theme.font_size.MD,
      color: theme.colors.GRAY_300,
    },
});