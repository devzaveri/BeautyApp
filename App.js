import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Router from './src/routes/Route/Router'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isLoading , setIsLoading] = useState(false)
  const [isAuth , setIsAuth] = useState(true)

  useEffect(()=> {
    console.log("isAuth===App" , isAuth);
  },[])

  return (
    <NavigationContainer>
    <Router isAuth={isAuth} />
    </NavigationContainer>
    
  )
}

export default App