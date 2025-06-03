import React from "react";
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function Projetos() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Animated.View entering={FadeInUp.duration(1000)}>
        <Text style={styles.title}>Projetos</Text>

        <View style={styles.item}>
          <Text style={styles.projectName}>API REST de Currículos</Text>
          <Text style={styles.description}>API desenvolvida com Spring Boot e PostgreSQL.</Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/rayannebelanger/curriculo-api")}>
            <Text style={styles.link}>Repositório no GitHub</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={styles.projectName}>App Cartão de Visitas</Text>
          <Text style={styles.description}>Aplicativo mobile em React Native para cartão digital.</Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/rayannebelanger/cartao-de-visita")}>
            <Text style={styles.link}>Repositório no GitHub</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={styles.projectName}>Jogo de Dados</Text>
          <Text style={styles.description}>Jogo de dados com feedback visual.</Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/rayannebelanger/jogodados")}>
            <Text style={styles.link}>Repositório no GitHub</Text>
          </TouchableOpacity>
        </View>
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
  item: {
    backgroundColor: "#16213E",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#FF6F61",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 12,
  },
  projectName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    color: "#FF6F61",
    textDecorationLine: "underline",
  },
});
