import { Text, View, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ButtonIng } from '../../components/ButtonIng';
import Bolo from '../../assets/bolochocolate.png'

import * as iP from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { recipeCreate } from '../../storage/recipe/recipeCreate';

export function AddRecipe() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")

  async function handleUserPhotoSelect() {
    try {
      const i = await iP.launchImageLibraryAsync({ // i armazena as informações da foto selecionada pelo usuario
        mediaTypes: iP.MediaTypeOptions.Images, //definindo que só aceitamos imagens
        quality: 1, //definimos que a imagem será guardada em uma qualidade média
        aspect: [4, 4], //proporção da imagem
        allowsEditing: true //autorizando o usuario a cortar a imagem
      })

      if (i.canceled) { //se o usuário fechar a galeria, a operação para.
        console.log('Operação Cancelada');
        return
      }

      const img = i.assets[0].uri //armazeno a string que virá da array de informações da imagem selecionada

      if (img) { //se img existir, retorna true...

        const photoInfo = await FileSystem.getInfoAsync(img); //pega informações da imagem

        if (photoInfo.exists && (photoInfo.size / 1024 / 1024 > 5)) { //se a imagem for maior que 3mb
          Alert.alert('Erro', 'A imagem não pode ser maior que 5MB'); // retorna alerta
          return //para a operação
        }

        setImage(img); //seto o estado com o valor da img que é string
      }
    } catch (error) { //caso o try retorne erro, o catch recupera esse erro
      console.log(`ERRO: > ${error}`); //exibe para o terminal
    }
  }

  const t = "Título"
  const d = "Descrição"

  async function handleOnButton() { //função assincrona 
    try {
    if(title.trim().length === 0){ //espaços e input sem nada escrito, retorna erro
      return Alert.alert("Nova Receita", "O título não pode ser vazio.")
    }

    const recipeId = await recipeCreate({title, description, image}) //espera a função receber os params, se deu tudo certo prossegue para o restante do código

    

    navigation.navigate('AddIngredient', { title, description, image, id: recipeId }) //AddIngredient está recebendo parametros, esses parametros estão sendo compartilhados entre as rotas
    

    console.log('> Cheguei aqui');
    } catch (error) {
      console.log(`ERRO > ${error}`);
    }
  }

  return (
    //caso o usuario clique fora dos campos de inputText, o teclado é fechado.
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 

      <View style={styles.container}>
        
        <Header showBackButton={true} />

        <Highlight title="Criando Receita" subtitle="Adicione título e descrição para prosseguir para a adição dos ingredientes." />

        {/* false = input pequeno */}
        <Input 
        showBigInput={false} 
        title={t}
        onChangeText={setTitle}
        />
        {/* true = input grande */}
        <Input 
        showBigInput={true} 
        title={d} 
        onChangeText={setDescription}
        />

        <Image style={styles.cardImage} source={{ uri: image }} />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleUserPhotoSelect}>
          <Text style={styles.buttonAddText}>Adicionar Imagem</Text>
        </TouchableOpacity>
        <ButtonAdd title="Criar Receita" props={handleOnButton} />

      </View>
    </TouchableWithoutFeedback>
  )
}