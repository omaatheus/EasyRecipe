import { StatusBar, View, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { ListEmpty } from '../../components/ListEmpty'
import { RecipeCard } from '../../components/RecipeCard'
import { useNavigation } from '@react-navigation/native';

import { getAllRecipes } from '../../storage/recipe/getAllRecipes'

export function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true)
  const [recept, setRecept] = useState ([{  }]); //valor do estado será uma array com object vazio

  async function handleAddRecipes() {
    navigation.navigate('AddRecipe');
  }

  async function fetchRecipes(){
    try {
    const data = await getAllRecipes() //armazeno as infos dentro da variavel
    
    setRecept(data) //atualizo o estado
    
    console.log(recept);
    

    } catch(error) {
      console.error(`ERRO > ${error}`);
    }
  }

  function handleOpenRecipe(title, id) {
    navigation.navigate('AddIngredient', {title, id})
  }

  useFocusEffect(useCallback(() => { //useFocusEffect é um hook do React navigation, é executado quando a tela está em foco, useCallback é um hook do react.
    console.log("Executou");
    fetchRecipes() // chama a função que carregou as infos
  }, []))
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content' //Cor dos icones
        backgroundColor='transparent' //Cor de fundo 
        translucent //Define que o corpo do site começa no topo 
      />

      <Header/>

      <View style={styles.main}>
        <Highlight 
          title="Receitas" 
          subtitle="Veja suas receitas salvas aqui."
        />

        <FlatList
          data={recept}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <RecipeCard
              title={item.title}
              subtitle={item.description}
              image={item.image}
              onPress={() => handleOpenRecipe(item.title, item.id)}
            />
            
            
          )}
          contentContainerStyle = {recept.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty
              message="Nenhuma receita registrada."
            />
          )}
        />

        <ButtonAdd 
          title="Adicionar Receita"
          props={handleAddRecipes}
          
        />
      </View>
    </View>
  )
}