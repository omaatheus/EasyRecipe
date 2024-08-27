import AsyncStorage from '@react-native-async-storage/async-storage'

import { getInfoByRecipe } from './getInfoByRecipe'

export async function infoGetByGroupAndTopic(recipeId, topic) {
    try {
        const storage = await getInfoByRecipe(recipeId)

        const infos = storage.filter(i => i.topic === topic)

        return infos
    } catch (error) {
        
    }
}