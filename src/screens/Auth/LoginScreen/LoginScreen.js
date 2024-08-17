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
} from './LoginScreenStyles';
import {View, Text, Image, TextInput, Alert, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Images} from '../../../helpers';
import ScreenName from '../../../helpers/ScreenNames';
import Constants from '../../../constants/Constants';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function HandleLoginevent(){
    //  console.log("hbjj");
     
    Constants.commonConstant.emitter.emit(
      Constants.eventListenerKeys.loginEvent,
    );
    // if(email === ""){
    //   Alert.alert("Please Enter your Email");
    // } else if(password === ""){
    //   Alert.alert("Please Enter your password")
    // } else {
    //   // navigation.replace(ScreenName.app.HomeScreen)
    //   console.log("nkl");
      
    //   Constants.commonConstant.emitter.emit(
    //     Constants.eventListenerKeys.loginEvent,
    //   );
    // }
  }

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
        <LetsLoginText>Let's Login</LetsLoginText>
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
          <PasswordText>Password</PasswordText>
          <EmailView>
            <EmailIcon resizeMode="contain" source={Images.passwordIcon} />
            <EmailInput
              placeholder="Enter Password"
              placeholderTextColor={Colors.theamTextColor}
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text);
              }}
            />
            <EyeView>
              <EyeImg resizeMode="contain" source={Images.openEye} />
            </EyeView>
          </EmailView>
          <ForgotPassView>
            <ForgotPassBtn onPress={()=> {
                navigation.navigate(ScreenName.auth.ForgotPassword)
            }}>
              <ForgotPassText>Forgot Password?</ForgotPassText>
            </ForgotPassBtn>
          </ForgotPassView>
          <LoginView>
            <LoginBtn onPress={()=> {
              HandleLoginevent()
            }}>
              <LoginText>Login</LoginText>
            </LoginBtn>
          </LoginView>
          <SignUpView>
            <AccountText>Don't have an account? </AccountText>
            <SignUpBtn
              onPress={() => {
                navigation.navigate(ScreenName.auth.SignUpScreen);
              }}>
              <SignUpText>SignUp</SignUpText>
            </SignUpBtn>
          </SignUpView>
        </UserInputView>
      </MainViewComponent>
    );
  }

  return (
    <MainComponent>
      <ScrollView>
      {HeaderView()}
      {MainFunction()}
      </ScrollView>
    </MainComponent>
  );
};

export default LoginScreen;
