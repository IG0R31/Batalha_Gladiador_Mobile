//Tela de Ranking dos players e Usuário: pódio + FlatList com ordenação.
import { StyleSheet, Text, View } from "react-native";


export default function TelaRanking({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>RANKING DOS GLADIADORES</Text>
      <Text style={styles.aviso}>
        pódio(3 primeiros), FlatList completa e em ordenação asc/desc entram
        aqui
      </Text>
      <Pressable
        style={styles.btn}
        onPess={() => navigation.navigate("Principal")}
      >
        <Text style={styles.btnTexto}>VOLTAR A ARENA,</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  //Adicionar CSS depois
});
