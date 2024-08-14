import { StatusBar, View, ScrollView } from 'react-native'
import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { RecipeCard } from '../../components/RecipeCard'

import bolo from '../../assets/bolochocolate.png'
import lasanha from '../../assets/lasanha.png'

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header/>

      <View style={styles.main}>
        <Highlight title="Receitas" subtitle="Veja suas receitas salvas aqui."/>

        <ScrollView style={styles.cardScrollView}>
          <RecipeCard image={bolo} title="Bolo de Chocolate" subtitle="Um delicioso bolo de chocolate feito em 50 minutos."/>
          <RecipeCard image={lasanha} title="Lasanha de Carne" subtitle="Lasanha feita com massa italiana da vovó Irene."/>
        </ScrollView>

        <ButtonAdd title="Adicionar Receita" />
      </View>
    </View>
  )
}