import { StyleSheet, View,  } from "react-native";
import { Text, Switch,TouchableHighlight, Pressable } from "react-native";
import React, {useState} from 'react';


export default function CreatePrivatePartyScreen() {
 

  const [count, setCount] = useState(1);
  const onPressPlus = () =>{
    if(count < 5){
    setCount(count + 1);

  }
  else{

  }
}
  const onPressMoins = () =>{
    if (count > 1) {
      setCount(count - 1);
    } 
    else{
    
   
  }}


  const [countPoints, setCountPoints] = useState(5);
  const onPressPlusPoints = () =>{
    if(countPoints < 40){
    setCountPoints(countPoints + 1);

  }
  else{

  }
}
  const onPressMoinsPoints = () =>{
    if (countPoints > 5) {
      setCountPoints(countPoints - 1);
    } 
    else{
    
   
  }}

 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={styles.page}>
        <Text style={styles.title}>Créer une partie privé</Text>

        <Text>Nombre d'équipes ? </Text>
        <TouchableHighlight onPress={onPressMoins}>
        <View style={styles.button}>
          <Text>-</Text>
        </View>
        </TouchableHighlight>

        <Text style={styles.countText}>{count || 1}</Text>

        <TouchableHighlight onPress={onPressPlus}>
        <View style={styles.button}>
          <Text>+</Text>
        </View>
        </TouchableHighlight>


        <Text>Nombre de points pour gagner la partie </Text>
        <TouchableHighlight onPress={onPressMoinsPoints}>
        <View style={styles.button}>
          <Text>-</Text>
        </View>
        </TouchableHighlight>

        <Text style={styles.countText}>{countPoints || 5}</Text>

        <TouchableHighlight onPress={onPressPlusPoints}>
        <View style={styles.button}>
          <Text>+</Text>
        </View>
        </TouchableHighlight>


        <View style={styles.container}>
          <Text>Activer les malus ?</Text>
          <Switch
            Text='Activer les malus ? '
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Pressable style={styles.button}>
        <Text>Créer</Text>
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
    marginTop: 30,
    alignItems: "flex-start"

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
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