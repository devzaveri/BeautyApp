import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from '../../components/AppNavigation/AppNavigation'
import DrawerNavigation from '../../components/DrawerNavigation/DrawerNavigation'

const AppStack = () => {
  return (
    <View style={{
      flex:1
  }}>
      {/* <AppNavigation /> */}
<DrawerNavigation />
    </View>
  )
}

export default AppStack