import { Text, View, FlatList } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Filter } from '../../components/Filter';
import { Highlight } from '../../components/Highlight';
import { ButtonIng } from '../../components/ButtonIng';
import { Header } from '../../components/Header';
import { ListEmpty } from '../../components/ListEmpty';
import { ButtonAdd } from '../../components/ButtonAdd';


export function AddIngredient() {

  const [info, setInfo ] = useState('Ingredientes')
  const [passos, setPassos] = useState([
    '100g Mortadela',
    '1 Pão Francês',
    '2x Alfaces',
    '50 Ovos',
    '12 Chocolates'
  ]) 

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header showBackButton={true} />

      <Highlight 
      title='Criando Receita'
      subtitle='Adicione ingredientes e instruções a sua receita.'
      />

      <ButtonIng title='Digite' icon='+' />

      <FlatList
      data={['Ingredientes', 'Instruções']}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Filter
      title={item}
      isActive={item === info}
      onPress={() => setInfo(item)}
      />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
      <FlatList
      data={passos}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <View style={styles.viewInput} >
        <ButtonIng
        readOnly={true}
        title={item}
        icon='X'
        remove={true}
        onPress={() => console.log('Oi')}
      />
      </View>
      )}
      ListEmptyComponent={() => (
        <ListEmpty
        message="Adicione um novo ingrediente ou instrução."
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      />

      <ButtonAdd
      title='Remover Receita'
      add={false}
      />
    </View>
  );
}
