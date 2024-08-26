import AsyncStorage from '@react-native-async-storage/async-storage'
import { RECIPE_COLLECTION } from '../config';

export async function recipeCreate({title, description, image}) {

    try {
        
        const obj = JSON.stringify({title, description, image})

        await AsyncStorage.setItem(RECIPE_COLLECTION, obj)

    } catch (error) {
        throw error;
    }

}