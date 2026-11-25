//Detalhe de OUTROS gladiadores (outros players/usuários) - apenas para visualização.

import { Pressable, Text, View } from "react-native";

export default function TelaGladiadorOutros({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>OUTROS GLADIADORES</Text>
      <Text style={styles.aviso}>
        imagem, badges, atributos e dono entram aqui (sem ações)
      </Text>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Principal")}
      >
        <Text> Voltar á Arena</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  //Adicionar CSS depois
});
