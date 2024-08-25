import { Text, View, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from 'react-native'
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

export function AddRecipe() {
  const navigation = useNavigation();
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")

  async function handleUserPhotoSelect() {
    try {
      const i = await iP.launchImageLibraryAsync({
        mediaTypes: iP.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      })

      if (i.canceled) {
        console.log('Operação Cancelada');
        return
      }

      const img = i.assets[0].uri

      if (img) {

        const photoInfo = await FileSystem.getInfoAsync(img); // Pega informações da imagem

        if (photoInfo.exists && (photoInfo.size / 1024 / 1024 > 3)) { // Se a imagem for maior que 3mb
          Alert.alert('Erro', 'A imagem não pode ser maior que 5MB');
        }

        setImage(img);
      }
    } catch (error) {
      console.log(`ERRO: > ${error}`);

    }


  }

  const t = "Título"
  const d = "Descrição"

  function handleOnButton() {

    navigation.navigate('AddIngredient', { title: 'Bolo de arroz', description: 'Delicioso bolo de Arroz da vovó', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprimeirapagina.com.br%2Fgastronomia%2Fbolo-de-arroz-e-melhor-que-muita-gente-aprenda-a-fazer-essa-delicia%2F&psig=AOvVaw2edwnDlKA2K2cmry89nQCF&ust=1724690679740000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjHvtDLkIgDFQAAAAAdAAAAABAE' })

    console.log('> Cheguei aqui');

  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.container}>

        <Header showBackButton={true} />

        <Highlight title="Criando Receita" subtitle="Adicione título e descrição para prosseguir para a adição dos ingredientes." />

        {/* false = input pequeno */}
        <Input showBigInput={false} title={t} />
        {/* true = input grande */}
        <Input showBigInput={true} title={d} />

        <Image style={styles.cardImage} source={{ uri: image }} />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleUserPhotoSelect}>
          <Text style={styles.buttonAddText}>Adicionar Imagem</Text>
        </TouchableOpacity>
        <ButtonAdd title="Criar Receita" props={handleOnButton} />

      </View>
    </TouchableWithoutFeedback>
  )
}