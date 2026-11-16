//Navegador principal do aplicativ

import { creatNativeStackNavigator } from "@react-navigation/native-stack";

//Import de todas as telas montadas em ../screens/..
import TelaBatalha from "..screens/TelaBatalha.js";
import TelaRanking from "..screens/TelaRanking.js";
import TelaCadastro from "../screens/TelaCadastro.js";
import TelaGladiadorDetalhe from "../screens/TelaGladiadorDetalhe.js";
import TelaGladiadornovo from "../screens/TelaGladiadornovo.js";
import TelaLogin from "../screens/TelaLogin.js";
import TelaPesquisa from "../screens/TelaPesquisa.js";
import TelaPrincipal from "../screens/TelaPrincipal.js";
import TelaUsuario from "../screens/TelaUsuario.js";

const stack = creatNativeStackNavigator(); // <-- Cria o Navegador

export function AppNavigation() {
  return (
    <StackActions.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Cadastro" component={TelaCadastro} />
      <Stack.Screen name="Principa;" component={TelaPrincipal} />
      <Stack.Screen name="Usuario" component={TelaUsuario} />
      <Stack.Screen name="GladiadorNovo" component={TelaGladiadornovo} />
      <Stack.Screen name="GladiadorDetalhe" component={TelaGladiadorDetalhe} />
      <Stack.Screen name="Batalha" component={TelaBatalha} />
      <Stack.Screen name="Ranking" component={TelaRanking} />
      <Stack.Screen name="Pesquisa" component={TelaPesquisa} />
    </StackActions.Navigator>
  );
}
