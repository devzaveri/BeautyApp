import {
    MainComponent
} from './ProfileScreenStyles'
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ProfileScreen = () => {
    useEffect(()=> {
        console.log("Profile Screen");
        
    },[])
  return (
    <MainComponent>
      <Text>ProfileScreen</Text>
    </MainComponent>
  )
}

export default ProfileScreen