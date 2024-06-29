import { View, Text } from 'react-native'
import React from 'react'
import AuthNavigation from '../../components/AuthNavigation/AuthNavigation'

const AuthStack = () => {
  return (
    <View style={{flex:1}}>
      <AuthNavigation />
    </View>
  )
}

export default AuthStack