import AsyncStorage from '@react-native-async-storage/async-storage';
import { RECIPE_COLLECTION } from '../config';
import { getAllRecipes } from './getAllRecipes';


export async function recipeCreate({ title, description, image }) {
    try {
        const storedRecipes = await getAllRecipes();

        const newRecipe = {
            id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
            title: title,
            description: description,
            image: image
        };
        
        const updatedRecipes = [...storedRecipes, newRecipe];

        await AsyncStorage.setItem(RECIPE_COLLECTION, JSON.stringify(updatedRecipes));

        console.log('> Deu tudo certo!');

        return newRecipe.id
        
    } catch (error) {
        throw error;
    }
}
