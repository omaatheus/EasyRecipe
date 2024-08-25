import { Text, View, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight'
import { ButtonAdd  } from '../../components/ButtonAdd'
import { ButtonIng } from '../../components/ButtonIng';
import Bolo from '../../assets/bolochocolate.png'

export function AddRecipe() {
  const navigation = useNavigation();
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()

  const t = "Título"
  const d = "Descrição"

  function handleOnButton(){

    navigation.navigate('AddIngredient', {title: 'Bolo de arroz', description: 'Delicioso bolo de Arroz da vovó', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprimeirapagina.com.br%2Fgastronomia%2Fbolo-de-arroz-e-melhor-que-muita-gente-aprenda-a-fazer-essa-delicia%2F&psig=AOvVaw2edwnDlKA2K2cmry89nQCF&ust=1724690679740000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjHvtDLkIgDFQAAAAAdAAAAABAE'})

    console.log('> Cheguei aqui');
    
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    
    <View style={styles.container}>

      <Header showBackButton={true} />

      <Highlight title="Criando Receita" subtitle="Adicione título e descrição para prosseguir para a adição dos ingredientes."/>

      {/* false = input pequeno */}
      <Input showBigInput={false} title={t}/>
      {/* true = input grande */}
      <Input showBigInput={true} title={d}/>

      <Image style={styles.cardImage} source={Bolo}/>

      <TouchableOpacity style={styles.buttonAdd}>
        <Text style={styles.buttonAddText}>Adicionar Imagem</Text>
      </TouchableOpacity>
      <ButtonAdd title="Criar Receita" props={handleOnButton}/>
      
    </View>
    </TouchableWithoutFeedback>
  )
}