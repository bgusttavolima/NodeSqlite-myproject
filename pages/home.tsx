import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, Button, TextInput, Card, IconButton } from "react-native-paper";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // mock de dados só pro layout
  const [usuarios, setUsuarios] = useState([
    { ID_US: 1, NOME_US: "João Silva", EMAIL_US: "joao@email.com" },
    { ID_US: 2, NOME_US: "Maria Souza", EMAIL_US: "maria@email.com" },
  ]);

  const renderItem = ({ item }: { item: any }) => (
    <Card style={styles.card} mode="outlined">
      <Card.Content>
        <Text style={styles.nome}>{item.NOME_US}</Text>
        <Text>{item.EMAIL_US}</Text>
      </Card.Content>
      <Card.Actions>
        <IconButton icon="pencil" size={20} iconColor="#1976D2" onPress={() => {}} />
        <IconButton icon="delete" size={20} iconColor="#D32F2F" onPress={() => {}} />
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome"
        value={nome}
        mode="outlined"
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button mode="contained" onPress={() => {}} style={styles.button}>
        Adicionar Usuário
      </Button>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.ID_US.toString()}
        renderItem={renderItem}
        style={styles.lista}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
  },
  lista: {
    flex: 1,
  },
  card: {
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
