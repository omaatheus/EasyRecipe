import AsyncStorage from '@react-native-async-storage/async-storage'
import { RECIPE_COLLECTION } from '../config';

export async function getAllRecipes() {
    const storage = await AsyncStorage.getItem(RECIPE_COLLECTION)

    const recipes = storage ? JSON.parse(storage) : []

    return recipes
}