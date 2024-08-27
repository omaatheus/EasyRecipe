import { Text, View, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Filter } from '../../components/Filter';
import { Highlight } from '../../components/Highlight';
import { ButtonIng } from '../../components/ButtonIng';
import { Header } from '../../components/Header';
import { ListEmpty } from '../../components/ListEmpty';
import { ButtonAdd } from '../../components/ButtonAdd';
import { useRoute } from '@react-navigation/native';
import { getInfoByRecipe } from '../../storage/aditionals/getInfoByRecipe';
import { AddInfoByRecipe } from '../../storage/aditionals/addInfoByTopic';
import { infoGetByGroupAndTopic } from '../../storage/aditionals/infoGetByRecipeAndTopic';
import { InfoCard } from '../../components/InfoCard';
import { infoRemoveByRecipe } from '../../storage/aditionals/infoRemoveByRecipe';
import { removeRecipe } from '../../storage/recipe/removeRecipe';


export function AddIngredient() {
  const [ newInfo, setNewInfo ] = useState('')
  const [ topic, setTopic ] = useState('Ingredientes')
  const [ passos, setPassos] = useState([]) 

  const navigation = useNavigation();

  const newInfoInputRef = useRef(null)

  const route = useRoute()

  const { title, description, image, id } = route.params

  async function handleAddInfo() {
    if (newInfo.trim().length === 0){
      return Alert.alert('Erro', 'Essa informação não pode ser vazia.')
    }

    const newInformation = {
      newInformation: newInfo,
      topic,
    }

    try {
      await AddInfoByRecipe(newInformation, id)
      
      setNewInfo('')
      await fetchIngredientsByInfo()
    } catch(error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possivel adicionar.')
    }
  }

  async function fetchIngredientsByInfo() {
    try {
      const infoByRecipe = await infoGetByGroupAndTopic(id, topic)

      newInfoInputRef.current?.blur()

      setPassos(infoByRecipe)
    } catch(error) {
      console.log(error);
      Alert.alert('Erro')
    }
  }

  async function handleRemoveInfo(info) {
    try {
      await infoRemoveByRecipe(info, id)

      console.log('Cheguei aqui');
      
      await fetchIngredientsByInfo()
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possivel remover.')
      
    }
  }

  async function recipeRemove() {
    try {
      await removeRecipe(id)
      navigation.navigate('Home');

    } catch (error) {
      console.log(error);
      Alert.alert('Remover receita', 'Não foi posível remover a receita.');
    }
  }

  async function handleRecipeRemove() {
    Alert.alert(
      'Remover',
      'Deseja remover a receita?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => recipeRemove() }
      ]
    )
  }

  useEffect(() => {
    fetchIngredientsByInfo()
  }, [topic])
  return (
    <View style={styles.container}>
      <Header showBackButton={true} />

      <Highlight 
      title={title}
      subtitle='Adicione ingredientes e instruções a sua receita.'
      />

      <ButtonIng title='Digite' icon='+' onChangeText={setNewInfo} onPress={handleAddInfo} value={newInfo} inputRef={newInfoInputRef} onSubmitEditing={handleAddInfo} returnKeyType="send"/>

      <FlatList
      data={['Ingredientes', 'Instruções']}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Filter
      title={item}
      isActive={item === topic}
      onPress={() => setTopic(item)}
      />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
      {passos.length > 0 && <FlatList
      data={passos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.viewInput} >
        <InfoCard
        title={item.newInformation}
        icon='playlist-remove'
        remove={true}
        onPress={() =>handleRemoveInfo(item.newInformation)}
      />
      </View>
      )}
      ListEmptyComponent={() => (
        <ListEmpty
        message="Adicione um novo ingrediente ou instrução."
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      />
    }
      <ButtonAdd
      title='Remover Receita'
      add={false}
      props={handleRecipeRemove}
      />
    </View>
  );
}
