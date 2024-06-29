import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AuthStack from '../AuthStack/AuthStack';
import AppStack from '../Appstack/AppStack';

const Router = route => {
    useEffect(()=> {
        console.log("route=====>" , route);
    },[route])
  return (
    <View style={{flex: 1}}>
      {
        route?.isAuth ? <AuthStack /> : <AppStack />
      }
    </View>
  )
}

export default Router