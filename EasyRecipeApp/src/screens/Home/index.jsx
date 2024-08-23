import React from "react";
import { View, FlatList } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { ListEmpty } from '../../components/ListEmpty';
import { RecipeCard } from '../../components/RecipeCard';
import { useNavigation } from '@react-navigation/native';

import bolo from '../../assets/bolochocolate.png';
import lasanha from '../../assets/lasanha.png';

export function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true)
  const [recept, setRecept] = useState (['Oi AMorrr']);

  function handleAddRecipe() {
    navigation.navigate('AddRecipe');
  }

  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.main}>
        <Highlight 
          title="Receitas" 
          subtitle="Veja suas receitas salvas aqui."
        />

        <FlatList
          style={styles.FlatList}
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

        <ButtonAdd 
          title="Adicionar Receita"
          props={handleAddRecipe}
        />
      </View>
    </View>
  )
}