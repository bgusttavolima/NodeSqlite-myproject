import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Conexao, createTable, inserirUsuario, selectUsuario, selectUsuarioId, dropTable , deleteUsuario, updateUsuario} from './Conf/Banco';
import Home from './pages/home'
export default function App() {

   useEffect(()=>{
     async function Main(){
        let db =  await Conexao();
       // await createTable(db);
       // await dropTable(db, 'USUARIO');
      // inserirUsuario(db,"Ricardo","@Giovanna");

       const usuarios = await selectUsuario(db!);

        for( const usuario of usuarios){
              console.log(usuario.ID_US, usuario.NOME_US, usuario.EMAIL_US);
          }

          //select by id
        const usuario  = await selectUsuarioId(db!,5);     
        if(usuario){
         console.log(usuario.ID_US, usuario.NOME_US,usuario.EMAIL_US)
        }else{
         console.log("não foi possivel encontrar")
        }
   
    console.log("/------------------------------------------------------");
       // await deleteUsuario(db, 3);

       console.log("/------------------------------------------------------");
       // await updateUsuario(db, 5, "ellen", "@ellen.com");
       
     }
      
     Main();
     
  },[])

  return (
    Home()
)};
