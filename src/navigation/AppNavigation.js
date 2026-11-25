// Navegador principal do aplicativo — 1 native-stack, fluxo linear.
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import de todas as telas montadas em ../screens/
import TelaLogin from "../screens/TelaLogin.js";
import TelaCadastro from "../screens/TelaCadastro.js";
import TelaPrincipal from "../screens/TelaPrincipal.js";
import TelaUsuario from "../screens/TelaUsuario.js";
import TelaGladiadorNovo from "../screens/TelaGladiadorNovo.js";
import TelaGladiadorDetalhe from "../screens/TelaGladiadorDetalhe.js";
import TelaGladiadorOutros from "../screens/TelaGladiadorOutros.js";
import TelaBatalha from "../screens/TelaBatalha.js";
import TelaRanking from "../screens/TelaRanking.js";
import TelaPesquisa from "../screens/TelaPesquisa.js";

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Cadastro" component={TelaCadastro} />
      <Stack.Screen name="Principal" component={TelaPrincipal} />
      <Stack.Screen name="Usuario" component={TelaUsuario} />
      <Stack.Screen name="GladiadorNovo" component={TelaGladiadorNovo} />
      <Stack.Screen name="GladiadorDetalhe" component={TelaGladiadorDetalhe} />
      <Stack.Screen name="GladiadorOutros" component={TelaGladiadorOutros} />
      <Stack.Screen name="Batalha" component={TelaBatalha} />
      <Stack.Screen name="Ranking" component={TelaRanking} />
      <Stack.Screen name="Pesquisa" component={TelaPesquisa} />
    </Stack.Navigator>
  );
}
