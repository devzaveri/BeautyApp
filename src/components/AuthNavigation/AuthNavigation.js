import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/LoginScreen/LoginScreen';
import ScreenName from '../../helpers/ScreenNames';
import SignUpScreen from '../../screens/Auth/SignUpScreen/SignUpScreen';
import ForgotPassword from '../../screens/Auth/ForgotPassword/ForgotPassword';
import NewPasswordScreen from '../../screens/Auth/NewPasswordScreen/NewPasswordScreen';

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreenName.auth.LoginScreen}>
        <Stack.Screen name={ScreenName.auth.LoginScreen} component={LoginScreen} options={{
            headerShown:false
        }} />
        <Stack.Screen name={ScreenName.auth.SignUpScreen} component={SignUpScreen} options={{
            headerShown:false
        }} />
        <Stack.Screen name={ScreenName.auth.ForgotPassword} component={ForgotPassword} options={{
            headerShown:false
        }} />
        <Stack.Screen name={ScreenName.auth.NewPasswordScreen} component={NewPasswordScreen} options={{
            headerShown:false
        }} />
      </Stack.Navigator>
  )
}

export default AuthNavigation