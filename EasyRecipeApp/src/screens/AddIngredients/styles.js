import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const { colors, font_family, font_size } = theme

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BEGE,
        alignItems: 'center',
        justifyContent: 'center',
    },
});