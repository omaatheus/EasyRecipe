import AsyncStorage from '@react-native-async-storage/async-storage';
import { RECIPE_COLLECTION } from '../config';
import { getAllRecipes } from './getAllRecipes';

export async function recipeCreate({ title, description, image }) {
    try {
        const storedRecipes = await getAllRecipes();

        const newRecipe = {
            title: title,
            description: description,
            image: image
        };
        
        const updatedRecipes = [...storedRecipes, newRecipe];

        await AsyncStorage.setItem(RECIPE_COLLECTION, JSON.stringify(updatedRecipes));

        console.log('> Deu tudo certo!');
        
    } catch (error) {
        throw error;
    }
}
