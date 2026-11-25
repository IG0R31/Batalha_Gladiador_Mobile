// Arena de Btatalha: seleção dos gladiadores e resultado da luta.
import { Pressable, Text, View } from "react-native";


export default function TelaBatalha({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ARENA DE BATALHA</Text>
      <Text style={styles.aviso}>
        Local de escolher o seu Gladiador para batalar contra outros
        Gladiadores.
      </Text>
      <Pressable
        style={styles.btnAcao}
        on
        Press={() => navigation.navigate("Principal")}
      >
        <Text style={styles.btnTexto}>Voltar a Arena</Text>
      </Pressable>
    </View>
  );
}

const styles = StylesSheet.create({
  //Adicionar o CSS depois.
});
