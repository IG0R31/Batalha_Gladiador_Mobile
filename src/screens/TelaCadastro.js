//Tela de cadastro para um novo mestre(usuário) - recebe o cadastroService
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function TelaCadastro({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={styles.titulo}>CADASTRE-SE</Text>
      <Text style={styles.aviso}>
        campo de nome, email e senha entram aqui.
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.replace("Principal")}
      >
        <Text style={styles.btnTexto}>Cadastrar</Text>
      </Pressable>
      <Pressable
        style={style.link}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Já sou mestre - acessar</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  //Adicionar CSS depois
});
