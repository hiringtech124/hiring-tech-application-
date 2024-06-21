import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import Countryname from '../Screen/Countryname';
import HrRegistration from '../Screen/HrRegistration';
import CandidateRegistration from '../Screen/CandidateRegistration';
import Jobtype from '../Screen/Jobtype';
import Choosejob from '../Screen/Choosejob';
import Interest from '../Screen/Preferences/Interest';
import Addskill from '../Screen/Preferences/Addskill';
import Looking from '../Screen/Preferences/Looking';
import Workmode from "../Screen/Preferences/Workmode"
import WorkExpe from '../Screen/Preferences/WorkExpe';
import Refercity from "../Screen/Preferences/Refercity"
import Preferences from '../Screen/Preferences';
import ChandidateProfile from '../Screen/Resume/ChandidateProfile';
import SetupResume from '../Screen/Resume/SetupResume';
const Stack = createNativeStackNavigator();

const AppNavigator = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
     
      <Stack.Screen name="Choosejob" component={Choosejob} />
      <Stack.Screen name="Jobtype" component={Jobtype} />
      <Stack.Screen name="Preferences" component={Preferences} />
      {/* <Stack.Screen name="Interest" component={Interest} /> */}

      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="CandidateRegistration" component={CandidateRegistration} />
      <Stack.Screen name="HrRegistration" component={HrRegistration} />
      
     <Stack.Screen name="Login" component={Login} />
    
     <Stack.Screen name="Countryname" component={Countryname} />
     <Stack.Screen name="SetupResume" component={SetupResume} />
      <Stack.Screen name="ChandidateProfile" component={ChandidateProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;