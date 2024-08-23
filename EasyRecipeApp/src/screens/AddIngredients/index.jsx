import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { InputAdd } from '../../components/InputAdd';
import { IngredientsCard } from '../../components/IngredientsCard';
import { ButtonAdd } from '../../components/ButtonAdd';
import { useNavigation } from '@react-navigation/native';

export function AddIngredients() {
  const navigation = useNavigation();

  function handleDeleteRecipe() {

  }

  // eu tava fazendo tentando fazer essa tela pra ajudar mas tive q sair no meio
  return (
    <View style={styles.container}>
      <Header
        showBackButton={true}
      />

      <Highlight
        title='Ingredientes'
        subtitle='Ingredientes são fundamentais para uma receita recheada de amor e carinho.'
      />

      <InputAdd/>
      <IngredientsCard/>

      {/* Flatlist para o botão ficar no mesmo lugar, gambiarra irada */}
      <FlatList/>

      <ButtonAdd
        title={'Excluir Receita'}
        props={handleDeleteRecipe}
        showRedButton={true}
        showWhiteText={true}
      />
    </View>
  );
}