import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function ExperienciaProfissional() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Animated.View entering={FadeInUp.duration(1000)}>
        <Text style={styles.title}>Experiência Profissional</Text>

        <View style={styles.item}>
          <Text style={styles.position}>Analista de Suporte (Estagiária)</Text>
          <Text style={styles.company}>Safetec</Text>
          <Text style={styles.period}>10 meses</Text>
          <Text style={styles.description}>
            Atuação em suporte técnico para ferramentas cloud, resolução ágil de problemas e atendimento ao cliente.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.position}>Consultora de Serviços</Text>
          <Text style={styles.company}>Pateo Hyundai</Text>
          <Text style={styles.period}>2 anos</Text>
          <Text style={styles.description}>
            Atendimento ao cliente, administração e suporte ao usuário.
          </Text>
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
  position: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 2,
  },
  period: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#aaa",
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: "#ccc",
  },
});
