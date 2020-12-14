/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import InitialLaunchScreen from './src/screens/InitialLaunchScreen';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen1 from './src/screens/SignUpScreen1';
import SignUpScreen2 from './src/screens/SignUpScreen2';
import FeedScreen from './src/screens/FeedScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const Stack = createStackNavigator();

const App: () => React$Node = () => {


  return (
    <View style={styles.container}>
      {/* <InitialLaunchScreen /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions = { {headerShown: false}}>
          <Stack.Screen name="SplashScreen" component = {SplashScreen} 
          />
          <Stack.Screen name="InitialLaunchScreen" component = {InitialLaunchScreen} 
          />
          <Stack.Screen name="SignUpScreen1" component = {SignUpScreen1} 
          />
          <Stack.Screen name="SignUpScreen2" component = {SignUpScreen2} 
          />
          <Stack.Screen name="LoginScreen" component = {LoginScreen} 
          />
          
        </Stack.Navigator>  
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  }
});

export default App;
