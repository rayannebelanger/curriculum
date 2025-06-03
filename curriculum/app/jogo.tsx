import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

type Tentativa = {
  guess: string;
  result: string;
};

export default function Jogo() {
  const [senha, setSenha] = useState<string>("");
  const [chute, setChute] = useState<string>("");
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [vitoria, setVitoria] = useState<boolean>(false);

  function gerarSenha(): string {
    let nums: number[] = [];
    while (nums.length < 4) {
      const n = Math.floor(Math.random() * 10);
      if (!nums.includes(n)) nums.push(n);
    }
    return nums.join("");
  }

  function verificarChute() {
    if (chute.length !== 4) {
      Alert.alert("Erro", "Digite um número de 4 dígitos.");
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (chute[i] === senha[i]) bulls++;
      else if (senha.includes(chute[i])) cows++;
    }

    const resultado = `${bulls} Bulls, ${cows} Cows`;
    setTentativas([{ guess: chute, result: resultado }, ...tentativas]);
    setChute("");

    if (bulls === 4) setVitoria(true);

    if (tentativas.length + 1 >= 10 && bulls !== 4) {
      Alert.alert("Fim de Jogo", `Você atingiu 10 tentativas. A senha era ${senha}`);
      setVitoria(true);
    }
  }

  function mostrarSenha() {
    Alert.alert("Senha Secreta", senha);
  }

  function reiniciar() {
    setSenha(gerarSenha());
    setTentativas([]);
    setVitoria(false);
    setChute("");
  }

  useEffect(() => {
    reiniciar();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>Jogo Senha (Bulls and Cows)</Text>

      <Text style={styles.instruction}>
        Tente adivinhar o número secreto de 4 dígitos com números únicos.
      </Text>

      <Button title="Mostrar Senha" onPress={mostrarSenha} color="#FF6F61" />

      {vitoria ? (
        <>
          <Text style={styles.vitoria}>Parabéns! Você acertou ou o jogo acabou.</Text>
          <Button title="Jogar Novamente" onPress={reiniciar} color="#FF6F61" />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Digite seu palpite"
            keyboardType="number-pad"
            maxLength={4}
            value={chute}
            onChangeText={setChute}
          />
          <Button title="Chutar" onPress={verificarChute} color="#FF6F61" />
        </>
      )}

      <FlatList
        style={styles.list}
        data={tentativas}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.tentativa}>
            <Text style={styles.tentativaText}>Palpite: {item.guess}</Text>
            <Text style={styles.tentativaText}>Resultado: {item.result}</Text>
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F3460",
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6F61",
    textAlign: "center",
    marginBottom: 12,
  },
  instruction: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#FF6F61",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 15,
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    letterSpacing: 8,
  },
  tentativa: {
    backgroundColor: "#16213E",
    padding: 12,
    borderRadius: 14,
    marginVertical: 6,
  },
  tentativaText: {
    color: "#ccc",
    fontSize: 16,
  },
  vitoria: {
    fontSize: 20,
    color: "#0F0",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  list: {
    marginTop: 20,
  },
});
