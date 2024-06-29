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
  SignUpText
} from './SignUpScreenStyles'
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors, Images } from '../../../helpers'
import ScreenName from '../../../helpers/ScreenNames'

const SignUpScreen = ({navigation}) => {
    const [name , setName] = useState("")
    const [ email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    
  function HeaderView(){
    return(
        <MainHeaderView>
            <MainAppLogo source={Images.MainLogo} />
        </MainHeaderView>
    )
}
function MainFunction(){
  return(
      <MainViewComponent>
          <LetsLoginText>Let’s Register</LetsLoginText>
          <UserInputView>
              <EmailText>Name</EmailText>
              <EmailView>
                  <EmailIcon resizeMode='contain' source={Images.user} />
                  <EmailInput placeholder='Enter your name' placeholderTextColor={Colors.theamTextColor} />
              </EmailView>
              <PasswordText>Email</PasswordText>
              <EmailView>
                  <EmailIcon resizeMode='contain' source={Images.Emailicon} />
                <EmailInput placeholder='Enter your email' placeholderTextColor={Colors.theamTextColor} />
              </EmailView>
              
              <PasswordText>Password</PasswordText>
              <EmailView>
                  <EmailIcon resizeMode='contain' source={Images.passwordIcon} />
                  <EmailInput placeholder='Enter Password' placeholderTextColor={Colors.theamTextColor} secureTextEntry={true} />
                  <EyeView>
                      <EyeImg resizeMode='contain' source={Images.openEye} />
                  </EyeView>
              </EmailView>
             
              <LoginView>
                  <LoginBtn onPress={()=> {
                    navigation.navigate(ScreenName.auth.LoginScreen)
                  }}>
                      <LoginText>Signup</LoginText>
                  </LoginBtn>
              </LoginView>
              <SignUpView>
               <AccountText>Already have an account? </AccountText>  
               <SignUpBtn onPress={()=> {
                  navigation.navigate(ScreenName.auth.LoginScreen)
               }}>
                  <SignUpText>Login</SignUpText>
                  </SignUpBtn> 
              </SignUpView>
          </UserInputView>
      </MainViewComponent>
  )
}
  return (
    <MainComponent>
     {HeaderView()}
    {MainFunction()}
   </MainComponent>
  )
}

export default SignUpScreen