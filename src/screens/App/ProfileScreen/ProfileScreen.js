import {
    MainComponent,
    MainHeaderView,
  OpenDrawerBtn,
  OpenDrawerImg,
  MainLogoView,
  MainLogo,
  MainContainerView,
  ProfileContainer,
  ProfileImage,
  ProfileDetailsView,
  ProfileName,
  GoInsideImage
} from './ProfileScreenStyles'
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Images } from '../../../helpers'

const ProfileScreen = ({navigation}) => {
    function HeaderContainer(){
      return(
        <MainHeaderView>
        <OpenDrawerBtn
          onPress={() => {
            navigation.openDrawer();
          }}>
          <OpenDrawerImg resizeMode="contain" source={Images.drawer} />
        </OpenDrawerBtn>
        <MainLogoView>
          <MainLogo source={Images.MainLogoPng} />
        </MainLogoView>
        <OpenDrawerBtn
          onPress={() => {
            
          }}>
          <OpenDrawerImg resizeMode="contain" source={Images.notification} />
        </OpenDrawerBtn>
      </MainHeaderView>
      )
    }

    function MainContainer(){
      return(
        <MainContainerView>
          <ProfileContainer>
            <ProfileImage resizeMode='contain' source={Images.Mainprofile} />
            <ProfileDetailsView>
              <ProfileName>Dev Zaveri</ProfileName>
              <ProfileName numberOfLines={1}>devsoni5880@gmail.com</ProfileName>
            </ProfileDetailsView>
            <GoInsideImage resizeMode='contain' source={Images.goInside} />
          </ProfileContainer>
        </MainContainerView>
      )
    }

  return (
    <MainComponent>
      {HeaderContainer()}
      {MainContainer()}
    </MainComponent>
  )
}

export default ProfileScreen