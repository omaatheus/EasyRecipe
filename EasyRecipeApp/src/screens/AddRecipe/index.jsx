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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
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

    navigation.navigate('AddIngredient', { title, description, image })

    console.log('> Cheguei aqui');

  }

  return (

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