import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomBar } from './Src/Navigation/Index';
import Styles from './Src/Utility/appStyle';

export default function App() {
  return (
    
    <NavigationContainer>
      <AppBottomBar/>
    </NavigationContainer>
    
  );
}


