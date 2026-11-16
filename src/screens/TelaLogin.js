//Tela de Loggin do applicativo.
import { Pressable, StyleSheet, Text, View } from "react-native";

//Placeholder Navegável preenchido com o controlador de Login
export default function TelaLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BATALHA DE GLADIADORES</Text>
      <Text style={styles.subtitulo}>Acesse a Arena</Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.replace("Principal")}
      >
        <Text style={styles.btnTexto}>ENTRAR</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.replace("Cadastro")}
      >
        <Text style={styles.btnTexto}>Cadastrar novo Mestre</Text>
      </Pressable>
    </View>
  );
}

//Estilo do titulo, btn, subtítulo etc...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cdedb3",
  },
  titulo: { fontSize: 26, fontWeight: "700" },
  subtitulo: { fontSize: 14, color: "#4b5563", marginBotton: 24 },
  btn: { backgroundColor: "#0D9488", paddingVertical: 12, opad },
  btnTexto: { color: "#fff", fontWeight: "700" },
  link: { marginTop: 16 },
});
