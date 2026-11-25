//Tela principal da Arena/Mestre

import { Pressable, Text, View } from "react-native";


export default function TelaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ARENA</Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Usuario")}
      >
        <Text style={styles.btnTexto}>SEUS GLADIADORES</Text>
      </Pressable>

      <Pressable
        style={styles.btnAcao}
        onPress={() => navigation.navigate("Batalha")}
      >
        <Text style={styles.btnTexto}>BATALHAR</Text>
      </Pressable>
      <Pressable style={styles.btnTexto}>Ranking</Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Pesquisa")}
      >
        <Text style={styles.btnTexto}>PESQUISAR</Text>
      </Pressable>
    </View>
  );
}

const styles = SylesSheet.create({
  //CRIAR DEPOIS O STYLE DA PÁGINA
});
