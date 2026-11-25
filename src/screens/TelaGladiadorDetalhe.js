//Pagina de Detalhe do Gladiador do próprio Mestre(usuário): atributos, editar descrição e excluir.
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function TelaGladiadorDetalhe({ navigation }) {
  return (
    <View style={styles.container}>
      <Text styles={styles.titulo}>SEUS GLADIADORES</Text>
      <Text styles={styles.aviso}>
        imagem, badges, atributos (força/agilidade/stamin), editar descrição e
        excluir ficam aqui.
      </Text>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Usuário")}
      >
        <Text>Voltar aos gladiadores</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  //Adicionar CSS depois.
});
