//Criação de um Gladiador, recebe: Nome, Tieer, e grade de aparência

import { Pressable, StyleSheet, Text, View } from "react-native";


export default function TelaGladiadorNovo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MONTE O SEU GLADIADOR</Text>
      <Text style={styles.aviso}>
        nome, descrição, Seletor de Tier aparencia da grade entram aqui.
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Usuario")}
      >
        <Text style={styles.btnTexto}>Criar</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => navigation.canGoBack()}>
        <Text>Cancelar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  //Adicionar CSS depois
});
