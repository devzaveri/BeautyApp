import {
  MainHeaderView,
  AppLogo
} from './CustomDrawerContentStyles'
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Colors, Images } from '../../../helpers';

const CustomDrawerContent  = (props) => {
  function HeaderFunc(){
    return(
      <MainHeaderView>
        <AppLogo resizeMode='contain' source={Images.MainLogo} />
      </MainHeaderView>
    )
  }

  return (
    
   
    <DrawerContentScrollView contentContainerStyle={{flex: 1 , backgroundColor: Colors.theamColor}} {...props}>
        {HeaderFunc()}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent 