import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Conexao } from './Conf/Banco';
export default function App() {

  // ---- HOOK
  useEffect(()=>{
     async function Main() {
        let db =  await Conexao();
      
     }
      
     Main();
  },[])


  return (
    <View style={styles.container}>
     
      <Button icon="account-alert" mode="contained" onPress={() => console.log('Pressed')}>
        Inserir
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
