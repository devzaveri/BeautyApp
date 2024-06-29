import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/App/HomeScreen/HomeScreen';
import ScreenName from '../../helpers/ScreenNames';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen screenOptions={{ headerShown: false }} name={ScreenName.app.HomeScreen} component={HomeScreen} />
  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeStack'>
      <Tab.Screen   name="HomeStack" component={HomeStack} />
      
    </Tab.Navigator>
  );
}

export default AppNavigation;
