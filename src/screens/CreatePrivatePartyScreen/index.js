import { StyleSheet, View,  } from "react-native";
import { Text, Switch,TouchableHighlight, Pressable } from "react-native";
import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";


export default function CreatePrivatePartyScreen() {
 
  
  const [count, setCount] = useState(1);
  const onPressPlus = () =>{
    if(count < 5){
    setCount(count + 1);

  }
  else{
    setCount(1);
  }
}
  const onPressMoins = () =>{
    if (count > 1) {
      setCount(count - 1);
    } 
    else{
    
      setCount(5);
  }}


  const [countPoints, setCountPoints] = useState(5);
  const onPressPlusPoints = () =>{
    if(countPoints < 40){
    setCountPoints(countPoints + 1);

  }
  else{
    setCountPoints(5);
  }
}
  const onPressMoinsPoints = () =>{
    if (countPoints > 5) {
      setCountPoints(countPoints - 1);
    } 
    else{
    
      setCountPoints(40);
  }}

 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  const onPressCreate = () => {
    navigation.navigate("PrivatePartyMaster", 
    {nbTeam: count, nbPoint: countPoints, user:1});
  };
  return (
    <View style={styles.page}>
        <Text style={styles.title}>Créer une partie privé</Text>

        <Text>Nombre d'équipes ? </Text>
      <View style={styles.container}>
          <TouchableHighlight onPress={onPressMoins} style={styles.button}>
     
          <Text>-</Text>
      
        </TouchableHighlight>

        <Text> {count || 1}</Text>

        <TouchableHighlight onPress={onPressPlus} style={styles.button}>
     
          <Text>+</Text>
   
        </TouchableHighlight>
        </View>

        <Text>Nombre de points pour gagner la partie </Text>
        <View style={styles.container}>
        <TouchableHighlight onPress={onPressMoinsPoints} style={styles.button}>
       
          <Text>-</Text>
        
        </TouchableHighlight>
    
        <Text style={styles.countText}>{countPoints || 5}</Text>

        <TouchableHighlight onPress={onPressPlusPoints} style={styles.button}>
      
          <Text>+</Text>
       
        </TouchableHighlight>
        </View>

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

        <Pressable style={styles.buttonCreate} onPress={onPressCreate}>
        <Text>Créer</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, 
    padding: 10,
    backgroundColor: "#2660A4",

  },
  title: {
    fontSize:30,
    color: "#EDF7F6"
    
  },
  container: {
    marginTop: 30,
    alignItems:'center',
    flexDirection: 'row',
    widht:'50%',
    marginHorizontal:"25%",


  },

  button: {
    backgroundColor: "#735F3D",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,

  },
  buttonCreate: {
    backgroundColor: "#7DB030",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,

  }
});