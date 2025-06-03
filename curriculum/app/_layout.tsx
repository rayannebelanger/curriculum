import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        // Tipagem correta para iconName
        let iconName: React.ComponentProps<typeof Ionicons>["name"] = "ellipse-outline";

        switch (route.name) {
          case "home":
            iconName = "home-outline";
            break;
          case "sobre":
            iconName = "information-circle-outline";
            break;
          case "experiencia-academica":
            iconName = "school-outline";
            break;
          case "experiencia-profissional":
            iconName = "briefcase-outline";
            break;
          case "projetos":
            iconName = "folder-open-outline";
            break;
          case "jogo":
            iconName = "game-controller-outline";
            break;
        }

        return {
          tabBarActiveTintColor: "#FF6F61",
          tabBarInactiveTintColor: "#555",
          tabBarStyle: {
            backgroundColor: "#1B1B2F",
            borderTopColor: "#FF6F61",
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: "#16213E",
          },
          headerTintColor: "#FF6F61",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        };
      }}
    />
  );
}
