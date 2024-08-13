import { Home } from "./src/screens/Home";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { Loading } from "./src/components/Loading";

export default function App() {

  const [fontsLoader] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return fontsLoader ? <Home /> : <Loading />
  
}