import AsyncStorage from '@react-native-async-storage/async-storage'
import { INFOS_COLLECTION } from '../config';

export async function getInfoByRecipe(recipeId) {
    try {
        const storage = await AsyncStorage.getItem(`${INFOS_COLLECTION}-${recipeId}`)

        const infos = storage ? JSON.parse(storage) : [] 

        return infos
    } catch (error) {
        console.log('Erro: ', error);
        return []
    }
}