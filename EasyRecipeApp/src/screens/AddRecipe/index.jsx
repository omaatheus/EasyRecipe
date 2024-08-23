import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight'
import { Input } from '../../components/Input';
import { ButtonAdd  } from '../../components/ButtonAdd';
import { ButtonIng } from '../../components/ButtonIng';

export function AddRecipe() {
  const navigation = useNavigation();

  const t = 'Título';
  const d = 'Descrição';

  function handleNavAddIngredients() {
    navigation.navigate('AddIngredients');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header
          showBackButton={true}
        />

        <Highlight
          title='Criando Receita'
          subtitle='Adicione título e descrição para prosseguir para a adição dos ingredientes.'
        />

        <Input
          showBigInput={false}
          title={t}
        />
        <Input
          showBigInput={true}
          title={d}
        />

        {/* Flatlist para o botão ficar no mesmo lugar, gambiarra irada */}
        <FlatList/>

        <ButtonAdd
          title='Criar Receita'
          props={handleNavAddIngredients}
          showRedButton={false}
          showWhiteText={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}