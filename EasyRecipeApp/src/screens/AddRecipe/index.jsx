import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from './styles'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight'
import { ButtonAdd  } from '../../components/ButtonAdd'
import { ButtonIng } from '../../components/ButtonIng';

export function AddRecipe() {
  const navigation = useNavigation();

  const t = "Título"
  const d = "Descrição"

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    
    <View style={styles.container}>

      <Header showBackButton={true} />

      <Highlight title="Criando Receita" subtitle="Adicione título e descrição para prosseguir para a adição dos ingredientes."/>

      {/* false = input pequeno */}
      <Input showBigInput={false} title={t}/>
      {/* true = input grande */}
      <Input showBigInput={true} title={d}/>
      <View style={styles.margin}>
        
      </View>
      <ButtonAdd title="Criar Receita" />
      
    </View>
    </TouchableWithoutFeedback>
  )
}