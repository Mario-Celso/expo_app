import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="Index" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;