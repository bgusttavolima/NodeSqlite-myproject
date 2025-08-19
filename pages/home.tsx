import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from "react-native"
import {Text, Button} from "react-native-paper"
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

export default function Home(){

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