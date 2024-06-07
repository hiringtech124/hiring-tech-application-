import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import Countryname from '../Screen/Countryname';
import HrRegistration from '../Screen/HrRegistration';
import CandidateRegistration from '../Screen/CandidateRegistration';
const Stack = createNativeStackNavigator();

const AppNavigator = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="CandidateRegistration" component={CandidateRegistration} />
      <Stack.Screen name="HrRegistration" component={HrRegistration} />
      
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="Countryname" component={Countryname} />
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;