import AsyncStorage from '@react-native-async-storage/async-storage'
import { RECIPE_COLLECTION, INFOS_COLLECTION } from '../config';

import { getAllRecipes } from './getAllRecipes';

export async function removeRecipe(id) {
    try {
        const storedRecipes = await getAllRecipes()

        console.log('t: ',   storedRecipes);
        

        const recipes = storedRecipes.filter(i => i.id !== id)

        await AsyncStorage.setItem(RECIPE_COLLECTION, JSON.stringify(recipes));
        await AsyncStorage.removeItem(`${INFOS_COLLECTION}-${id}`);
    } catch (error) {
        console.log('Error');
        
    }
}