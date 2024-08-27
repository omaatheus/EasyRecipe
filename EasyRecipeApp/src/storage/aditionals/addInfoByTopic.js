import AsyncStorage from '@react-native-async-storage/async-storage'
import { INFOS_COLLECTION } from '../config'
import { getInfoByRecipe } from './getInfoByRecipe';

export async function AddInfoByRecipe(newInfo, recipeId){
    try {

        const storedRecipes = await getInfoByRecipe(recipeId)

        const storage = JSON.stringify([...storedRecipes, newInfo])

        await AsyncStorage.setItem(`${INFOS_COLLECTION}-${recipeId}`, storage)

        console.log(`> Infos guardadas para a receita ${recipeId}`);
        

    } catch (error) {
        console.log(error);
    }
}