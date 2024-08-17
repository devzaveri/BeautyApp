import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Router from './src/routes/Route/Router'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import Constants from './src/constants/Constants';

const App = () => {
  const [isLoading , setIsLoading] = useState(false)
  const [isAuth , setIsAuth] = useState(false)

  useEffect(() => {
    Constants.commonConstant.emitter.addListener(
      Constants.eventListenerKeys.loginEvent,
      () => {
        setIsAuth(true);
        console.log('Login--------->');
      },
    );
   
  }, []);

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Router isAuth={isAuth} />
    </NavigationContainer>
    </Provider>
    
  )
}

export default App