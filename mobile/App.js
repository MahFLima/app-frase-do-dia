import { ifIphoneX } from "react-native-iphone-x-helper";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FraseNaTela } from "./components/fraseNaTela";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Frase do Dia</Text>
      </View>
      <FraseNaTela />
      <View style={styles.footer}>
        <Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "blueviolet",
    color: "#fff",
  },
  titulo: {
    textAlign: "center",
    color: "#f1f1f1",
    fontWeight: "bold",
    fontSize: 16,
    ...ifIphoneX(
      {
        paddingTop: 40,
      },
      {
        paddingTop: 20,
      }
    ),
  },
  container: {
    backgroundColor: "#f2f2f2",
  },
});
