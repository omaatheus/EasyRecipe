import { StatusBar, View, ScrollView } from 'react-native'
import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { RecipeCard } from '../../components/RecipeCard'

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header/>

      <View style={styles.main}>
        <Highlight/>

        <ScrollView style={styles.cardScrollView}>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </ScrollView>

        <ButtonAdd title="Adicinar Receita"/>
      </View>
    </View>
  )
}