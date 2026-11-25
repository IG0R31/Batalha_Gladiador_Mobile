//Tela de Pesquiosa com o nome dos outros Gladiadores com: campo de busca + FlatList dos resultados.

import { Pressable, StyleSheet, Text, View } from "react-native";


export default function TelaPesquisa({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PESQUISA</Text>
      <Text style={styles.aviso}>
        TextInput + FlatList de resultados ("Ver") entram aqui.
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Principal")}
      >
        <Text style={styles.btnTexto}>Voltar à Arena</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  //Adicionar css depois
});
