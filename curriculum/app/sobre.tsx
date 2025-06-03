import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function Sobre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Animated.View entering={FadeInUp.duration(1000)}>
        <Text style={styles.title}>Sobre o App</Text>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido utilizando:
        </Text>
        <View style={styles.list}>
          <Text style={styles.item}>• React Native</Text>
          <Text style={styles.item}>• Expo Router para navegação entre telas</Text>
          <Text style={styles.item}>• React Native Reanimated para animações suaves</Text>
          <Text style={styles.item}>• TypeScript</Text>
          <Text style={styles.item}>• Implementação do jogo Senha (Bulls and Cows)</Text>
        </View>

        <Text style={styles.text}>
          O app tem o objetivo de mostrar meu currículo, experiência e projetos, além de conter um jogo interativo para diversão e desafio.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F3460",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF6F61",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 12,
  },
  list: {
    marginLeft: 12,
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 6,
  },
});
