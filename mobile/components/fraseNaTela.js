import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export const FraseNaTela = () => {
  const url = "http://192.168.15.3:3000/frases";

  const [frases, setFrases] = useState([
    {
      id: 99,
      autor: "Anonimo",
      frase: "Aperte o botão para gerar nova frase",
      urlImage: "./image.jpg",
    },
  ]);

  const [sorteioAleatorio, setSorteioAleatorio] = useState(0);

  async function getFrase() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      await setFrases(data);
    } catch (error) {
      console.log("erro");
    }

    setSorteioAleatorio(Math.floor(Math.random() * frases.length))
  }

  useEffect(() => {
    getFrase()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{frases[sorteioAleatorio].frase}</Text>
      <Text style={styles.autor}>{frases[sorteioAleatorio].autor}</Text>

      <Image
        style={styles.image}
        source={{
          uri: frases[sorteioAleatorio].urlImage,
        }}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          getFrase();
        }}
      >
        <Text style={styles.textoBtn}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 8,
  },
  texto: {
    fontSize: 14,
    textAlign: "center",
  },
  autor: {
    color: "#626262",
  },
  image: {
    width: '100%',
    height: 400,
    objectFit: "cover",
  },
  btn: {
    width: 100,
    marginVertical: 10,
    padding: 8,
    backgroundColor: "blueviolet",
  },
  textoBtn: {
    color: "#f1f1f1",
    textAlign: "center",
  },
});
