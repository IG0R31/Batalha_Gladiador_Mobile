//Perfil do mestre(Usuário) com os seus gladiadores - placeholder recebe créditos + FlatList.
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TelaUsuario({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SEUS GLADIADORES</Text>
      <Text style={styles.aviso}>
        cartão do usuário, créditos e lista de Gladiadores entram aqui.
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("GladiadorNovo")}
      >
        <Text style={styles.btnTexto}>
          Montar personagem (MIN - 250 CRÉDITOS)
        </Text>
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Principal")}
      >
        <Text>Voltar à Area</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
