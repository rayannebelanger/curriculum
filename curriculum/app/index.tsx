import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Home() {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.duration(1200)} style={styles.card}>
        <Text style={styles.nome}>Rayanne Belanger</Text>
        <Text style={styles.info}>21 anos</Text>
        <Text style={styles.info}>Recife, Pernambuco</Text>
        <Text style={styles.cargo}>Analista de Suporte</Text>
        <Text style={styles.curso}>Estudante de Sistemas para Internet - UNICAP</Text>
        <Text style={styles.texto}>
          Apaixonada pela área de dados e tecnologia. Trabalho atualmente como estagiária na Safetec,
          e busco sempre aprender e evoluir na área de backend e análise de dados.
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F3460",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#16213E",
    borderRadius: 24,
    padding: 30,
    width: width * 0.9,
    shadowColor: "#FF6F61",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15,
  },
  nome: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF6F61",
    textAlign: "center",
    marginBottom: 12,
  },
  info: {
    fontSize: 18,
    color: "#E0E0E0",
    textAlign: "center",
    marginVertical: 2,
  },
  cargo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginVertical: 8,
  },
  curso: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#aaa",
    textAlign: "center",
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    color: "#ddd",
    lineHeight: 24,
    textAlign: "center",
  },
});
