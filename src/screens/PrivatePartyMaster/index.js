import { StyleSheet, View,  } from "react-native";
import { Text, TextInput, Pressable } from "react-native";
import React from 'react';
import { useRoute, useNavigation } from "@react-navigation/native";


export default function PrivatePartyMaster() {
const route = useRoute();
const nbTeams = route.params?.nbTeam;  
const nbPoints = route.params?.nbPoint;
const user = route.params?.user;

  return (
    <View style={styles.page}>
        <Text style={styles.title}>Partieprivé  {user}</Text>
        <View>
          <Text>Nombres d'équipe : {nbTeams}</Text>
          <Text>Nombres de point pour gagner : {nbPoints}</Text>
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temp fix
    padding: 10,
    backgroundColor: "#2660A4",

  },
  title: {
    fontSize:30,
    color: "#EDF7F6"
    
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
    backgroundColor: "#7DB030",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,
  }
});