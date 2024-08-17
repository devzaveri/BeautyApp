import React, { useEffect } from 'react';
import AuthStack from '../AuthStack/AuthStack';
import AppStack from '../Appstack/AppStack';
import { View } from 'react-native';

const Router = ( Router ) => {
  useEffect(() => {
    console.log("route=====>", Router.isAuth); // Debugging to check the isAuth value
  }, [Router.isAuth]);

  return (
    <View style={{ flex: 1 }}>
      {Router.isAuth ? <AppStack /> : <AuthStack />}
    </View>
  );
};

export default Router;
