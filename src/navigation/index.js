import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CreatePrivatePartyScreen from "../screens/CreatePrivatePartyScreen";
import JoinPrivatePartyScreen from "../screens/JoinPrivatePartyScreen";
import PrivatePartyMaster from "../screens/PrivatePartyMaster";



import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const RootNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />

    </Stack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen}options={{headerShown: false}} />
      <HomeStack.Screen name="CreatePrivateParty" component={CreatePrivatePartyScreen}/>
      <HomeStack.Screen name="JoinPrivateParty" component={JoinPrivatePartyScreen}/>
      <HomeStack.Screen
      options={{headerShown: false}}
      name="PrivatePartyMaster"
      component={PrivatePartyMaster}/>
    </HomeStack.Navigator>
  );
};

export default RootNavigator;