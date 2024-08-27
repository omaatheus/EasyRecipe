import AsyncStorage from '@react-native-async-storage/async-storage'

import { INFOS_COLLECTION } from '../config'

import { getInfoByRecipe } from './getInfoByRecipe'

export async function infoRemoveByRecipe(info, id) {
    try {
        const storage = await getInfoByRecipe(id)

        const filtered = storage.filter(i => i.newInformation !== info)
        const infos = JSON.stringify(filtered)
        
        await AsyncStorage.setItem(`${INFOS_COLLECTION}-${id}`, infos)

    } catch (error) {
        console.log(error);
        
    }
}