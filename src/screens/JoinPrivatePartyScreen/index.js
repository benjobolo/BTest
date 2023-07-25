import { StyleSheet, View,  } from "react-native";
import { Text, TextInput, Pressable } from "react-native";
import React from 'react';



export default function JoinPrivatePartyScreen() {
 
    const [number, onChangeNumber] = React.useState('');


  return (
    <View style={styles.page}>
        <Text style={styles.title}>Rejoindre une partie privé</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Entrez le code"
            keyboardType="numeric"
        />
        <Pressable style={styles.button}>
        <Text>Rejoindre la partie</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temp fix
    padding: 10,

  },
  title: {
    fontSize:30,
    
    
  },
  container: {

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,
  }
});