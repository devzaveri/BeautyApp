import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import {Colors} from '../../../helpers';

export const MainComponent = styled.View`
flex: 1;
background: ${Colors.theamColor};
`
export const MainHeaderView = styled.View`
height: ${rh(20)}px;
width: ${rw(100)}px;
justify-content: center;
align-items: center;

`
export const MainAppLogo = styled.Image`
height: ${rh(20)}px;
width: ${100}px;

`

export const MainViewComponent = styled.View`
flex: 1;
padding-left: ${rw(6)}px;
padding-right: ${rw(6)}px;
margin-top: ${rh(4)}px;
`
export const LetsLoginText = styled.Text`
font-size: ${rs(28)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(2)}px;
`
export const UserInputView = styled.View`
margin-top: ${rh(5)}px;
`
export const EmailText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(1)}px;
`
export const EmailView =styled.View`
margin-top: ${rh(1)}px;
border-width: 1px;
/* padding-top: ${rh(1.5)}px; */
/* padding-bottom: ${rh(1.5)}px; */
height: ${rh(6)}px;
border-radius: ${rw(2)}px;
border-color: ${Colors.theamTextColor};
padding-left: ${rw(3)}px;
padding-right: ${rw(3)}px;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const EmailIcon = styled.Image`
height: ${rh(3)}px;
width: ${rw(6)}px;
tint-color: ${Colors.theamTextColor};
`;
export const EmailInput = styled.TextInput`
flex: 1;
padding-left: ${rw(3)}px;
padding-right: ${rw(2)}px;
color: ${Colors.theamTextColor};
`
export const PasswordText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(1)}px;
margin-top: ${rh(4)}px;
`
export const EyeView = styled.TouchableOpacity`
height: ${rh(6)}px;
width: ${rw(12)}px;
justify-content: center;
align-items: center;
`

export const EyeImg = styled.Image`
height: ${rh(4)}px;
width: ${rw(6)}px;
tint-color: ${Colors.theamTextColor};
`
export const ForgotPassView = styled.View`
margin-top: ${rh(2)}px;
width: ${rw(88)}px;

align-items: flex-end;
`
export const ForgotPassBtn = styled.TouchableOpacity``
export const ForgotPassText = styled.Text`
font-size: ${rs(14)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(0.5)}px;

`
export const LoginView = styled.View`
height: ${rh(6)}px;
width: ${rw(66)}px;
align-self: center;
border-radius: ${rw(2)}px;
margin-top: ${rh(8)}px;
background: ${Colors.theamTextColor};
align-items: center;
justify-content: center;
`
export const LoginBtn = styled.TouchableOpacity`
flex: 1;
width: ${rw(66)}px;
border-radius: ${rw(2)}px;
align-items: center;
justify-content: center;
`
export const LoginText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamColor};
letter-spacing: ${rw(1)}px;
font-weight: bold;
`

export const SignUpView = styled.View`
margin-top: ${rh(2)}px;
width: ${rw(88)}px;
justify-content: center;
flex-direction: row;
`
export const AccountText = styled.Text`
font-size: ${rs(14)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(0.5)}px;
`
export const SignUpBtn = styled.TouchableOpacity``

export const SignUpText  = styled.Text`
font-size: ${rs(14)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(0.5)}px;
text-decoration: underline;
`

export const MainFooterView = styled.View`
align-items: center;
justify-content: center;
bottom: ${rh(8)}px;
`

export const NewPasswordText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(1)}px;
margin-top: ${rh(2)}px;
`