import { StatusBar, View, ScrollView, FlatList } from 'react-native'
import { useState } from 'react'

import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { RecipeCard } from '../../components/RecipeCard'
import { ListEmpty } from '../../components/ListEmpty'

import bolo from '../../assets/bolochocolate.png'
import lasanha from '../../assets/lasanha.png'


export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [recept, setRecept] = useState (['Oi AMorrr']);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='darck-content' //Cor dos icones
        backgroundColor='tranparent' //Cor de fundo 
        translucent //Define que o copo do site começa no topo 
      />

      <Header/>

      <View style={styles.main}>
        <Highlight 
          title="Receitas" 
          subtitle="Veja suas receitas salvas aqui."
        />

        <FlatList 
          data={recept}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <RecipeCard
              title={item}
              subtitle={item}
              image={item}
            />
          )}
          contentContainerStyle = {recept.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Nenhuma receita registrada."
          />
        )}
        />

        <ButtonAdd title="Adicionar Receita" />
      </View>
    </View>
  )
}