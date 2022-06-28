import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPost from '../screens/DetailPost';
import {navigationRef} from './NavigationService';
import BottomNavigation from './BottomNavigation';

const rootStack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <rootStack.Navigator
        screenOptions={screenOptionStyle}
        initialRouteName={'Home'}>
        <rootStack.Screen name="Home" component={BottomNavigation} />
        <rootStack.Screen name="DetailPost" component={DetailPost} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
