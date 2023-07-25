import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";

import { NavigationContainer } from "@react-navigation/native";





function App() {
  return (
    <NavigationContainer>


            <RootNavigator />



      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;