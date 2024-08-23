import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { AddRecipe } from '../screens/AddRecipe';
import { AddIngredients } from '../screens/AddIngredients';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='AddRecipe'
                component={AddRecipe}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='AddIngredients'
                component={AddIngredients}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}