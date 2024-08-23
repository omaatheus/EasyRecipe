import React from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';

export function AddRecipe() {
  const navigation = useNavigation();

  function handleAddIngredient() {
    navigation.navigate('AddIngredient');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Header>
        <TouchableOpacity>
          <ArrowLeft size={32}/>
        </TouchableOpacity>
      </Header>

      <View style={styles.main}>
        <Highlight
          title="Criando Receita" 
          subtitle="Adicione título e descrição para prosseguir para a adição dos ingredientes."
        />

        <View style={styles.inputContainer}>
          <Input showBigInput={false} title="Título"/>

          <Input showBigInput={true} title="Descrição"/>
        </View>

        <ButtonAdd
          style={styles.ButtonAdd}
          title="Criar Receita"
          props={handleAddIngredient}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}