import React, { useEffect } from 'react';
import AuthStack from '../AuthStack/AuthStack';
import AppStack from '../Appstack/AppStack';
import { View } from 'react-native';

const Router = ({ isAuth }) => {
  useEffect(() => {
    console.log("route=====>", isAuth); // Debugging to check the isAuth value
  }, [isAuth]);

  return (
    <View style={{ flex: 1 }}>
      {isAuth ? <AppStack /> : <AuthStack />}
    </View>
  );
};

export default Router;
