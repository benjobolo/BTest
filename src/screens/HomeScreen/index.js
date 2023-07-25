import { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Pressable } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
 
  const navigation = useNavigation();

  const onPressCreatePrivateParty = () => {
    navigation.navigate("CreatePrivateParty");
  };
  const onPressJoinPrivateParty = () => {
    navigation.navigate("JoinPrivateParty");
  };


  return (
    <View style={styles.page}>
        <Text style={styles.title}>Blind Test</Text>

        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPressCreatePrivateParty}>
              <Text>Créer une partie privé</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={onPressJoinPrivateParty}>
              <Text>Rejoindre une partie privé</Text>
            </Pressable>
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

  },
  title: {
    fontSize:30,
    
    
  },
  container: {
    
    marginTop: 50,
  },
  button: {
    backgroundColor: "blue",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,
  }
});