import {
    MainComponent,
    MainHeaderView,
  OpenDrawerBtn,
  OpenDrawerImg,
  MainLogoView,
  MainLogo,
  MainContainerView,
  ProfileImageView,
  ProfileImage,
  BoxContaoiner,
  NameText,
  NameView,
  NameInput
} from "./EditProfileStyles"
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Images } from "../../../helpers"
import * as ImagePicker from 'react-native-image-picker';


const EditProfile = ({navigation}) => {
  function handleProfile() {
    ImagePicker.launchImageLibrary(
      {
       mediaType: 'photo',
       includeBase64: false,
       maxHeight: 200,
       maxWidth: 200,
      },
       response => {
          console.log(response);
          setPhoto(response);
         },
       )
  }
    function HeaderContainer(){
        return(
          <MainHeaderView>
          <OpenDrawerBtn
            onPress={() => {
              navigation.goBack()
            }}>
            <OpenDrawerImg resizeMode="contain" source={Images.backbutton} />
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
                <ProfileImageView onPress={()=> {
                  handleProfile()
                }}>
                    <ProfileImage source={Images.Mainprofile} />
                </ProfileImageView>
                <BoxContaoiner>
                <NameText>Name</NameText>
                <NameView>
                    <NameInput cursorColor={Colors.theamTextColor} />
                </NameView>
                </BoxContaoiner>
                <BoxContaoiner>
                <NameText>Number</NameText>
                <NameView>
                    <NameInput cursorColor={Colors.theamTextColor} />
                </NameView>
                </BoxContaoiner>
                <BoxContaoiner>
                <NameText>Email</NameText>
                <NameView>
                    <NameInput cursorColor={Colors.theamTextColor} />
                </NameView>
                </BoxContaoiner>
            </MainContainerView>
        )
      }

  return (
    <MainComponent>
    {HeaderContainer()}
    <ScrollView>
    {MainContainer()}
    </ScrollView>
  </MainComponent>
  )
}

export default EditProfile