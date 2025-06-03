import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function ExperienciaAcademica() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Animated.View entering={FadeInUp.duration(1000)}>
        <Text style={styles.title}>Experiência Acadêmica</Text>

        <View style={styles.item}>
          <Text style={styles.course}>Sistemas para Internet</Text>
          <Text style={styles.institution}>Universidade Católica de Pernambuco (Unicap)</Text>
          <Text style={styles.period}>Cursando</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.course}>Técnico em Administração</Text>
          <Text style={styles.institution}>Escola Técnica Senai</Text>
          <Text style={styles.period}>Concluído</Text>
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
  course: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  institution: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 2,
  },
  period: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#aaa",
  },
});
