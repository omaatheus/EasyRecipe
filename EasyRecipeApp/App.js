import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Loading } from "./src/components/Loading";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoader] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (  
    fontsLoader ?
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
      : <Loading />
  );
}