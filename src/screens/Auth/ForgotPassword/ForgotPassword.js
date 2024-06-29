import {
    MainComponent,
    MainHeaderView,
    MainAppLogo,
    MainViewComponent,
    LetsLoginText,
    UserInputView,
    EmailText,
    EmailView,
    EmailIcon,
    EmailInput,
    PasswordText,
    EyeView,
    EyeImg,
    ForgotPassView,
    ForgotPassBtn,
    ForgotPassText,
    LoginView,
    LoginBtn,
    LoginText,
    SignUpView,
    AccountText,
    SignUpBtn,
    SignUpText,
    MainFooterView
} from './ForgotPasswordStyles'

import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors, Images } from '../../../helpers';
import ScreenName from '../../../helpers/ScreenNames';

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function HeaderView() {
      return (
        <MainHeaderView>
          <MainAppLogo source={Images.MainLogo} />
        </MainHeaderView>
      );
    }
  
    function MainFunction() {
      return (
        <MainViewComponent>
          <LetsLoginText>Forgot Password?</LetsLoginText>
          <UserInputView>
            <EmailText>Email</EmailText>
            <EmailView>
              <EmailIcon resizeMode="contain" source={Images.Emailicon} />
              <EmailInput
                placeholder="Enter your email"
                placeholderTextColor={Colors.theamTextColor}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </EmailView>
            
          
           
           
          </UserInputView>
        </MainViewComponent>
      );
    }

    function FooterFunction(){
        return(
            <MainFooterView>
             <LoginView>
              <LoginBtn onPress={()=> {
                   navigation.navigate(ScreenName.auth.NewPasswordScreen);
              }}>
                <LoginText>Confirm Email</LoginText>
              </LoginBtn>
            </LoginView>
            <SignUpView>
              
              <SignUpBtn
                onPress={() => {
               
                  navigation.navigate(ScreenName.auth.LoginScreen);
                }}>
                <SignUpText>Login</SignUpText>
              </SignUpBtn>
            </SignUpView>
            </MainFooterView>
        )
    }
  
    return (
      <MainComponent>
        {HeaderView()}
        {MainFunction()}
        {FooterFunction()}
      </MainComponent>
    );
  };

export default ForgotPassword