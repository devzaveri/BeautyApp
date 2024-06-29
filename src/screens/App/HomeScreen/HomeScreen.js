import {
  MainComponent,
  MainHeaderView,
  OpenDrawerBtn,
  OpenDrawerImg,
  MainLogoView,
  MainLogo,
  MainBodyView
} from "./HomeScreenStyles"
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Images } from "../../../helpers"
import Carousel from 'react-native-reanimated-carousel';

const HomeScreen = ({navigation}) => {
  useEffect(()=> {
    console.log("Home");
  })

  function HeaderView(){
    return(
      <MainHeaderView>
        <OpenDrawerBtn onPress={()=> {
          navigation.openDrawer()
        }}>
          <OpenDrawerImg resizeMode="contain" source={Images.drawer} />
        </OpenDrawerBtn>
        <MainLogoView>
        <MainLogo source={Images.MainLogoPng} />
        </MainLogoView>
        <OpenDrawerBtn onPress={()=> {
          // navigation.openDrawer()
        }}>
          <OpenDrawerImg resizeMode="contain" source={Images.notification} />
        </OpenDrawerBtn>
      </MainHeaderView>
    )
  }

  function MainFunction() {
    return(
      <MainBodyView></MainBodyView>
    )
  }

  return (
    <MainComponent>
      {HeaderView()}
    

    {MainFunction()} 
  </MainComponent>
  )
}

export default HomeScreen