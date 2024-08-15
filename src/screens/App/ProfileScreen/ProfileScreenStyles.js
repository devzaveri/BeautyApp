import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import {Colors} from '../../../helpers';

export const MainComponent = styled.View`
flex: 1;
background: ${Colors.theamColor};
`

export const MainHeaderView = styled.View`
height: ${rh(10)}px;
padding-left: ${rw(5)}px;
padding-right: ${rw(5)}px;
flex-direction: row;

align-items: center;
`
export const OpenDrawerBtn = styled.TouchableOpacity`

`
export const OpenDrawerImg = styled.Image`
height: ${rh(4)}px;
width: ${rw(8)}px;
tint-color: ${Colors.theamTextColor};
`
export const MainLogoView = styled.View`
flex: 1;
align-items: center;
`
export const MainLogo = styled.Image`
height: ${rh(10)}px;
width: ${rw(20)}px;
`
export const MainContainerView = styled.View`
flex: 1;
` 
export const ProfileContainer = styled.TouchableOpacity`
flex-direction: row;
margin-top: ${rh(4)}px;
margin-left: ${rw(5)}px;
margin-right: ${rw(5)}px;
padding-left: ${rw(2)}px;
padding-right: ${rw(2)}px;
padding-top: ${rh(1)}px;
padding-bottom: ${rh(1)}px;
border-width: 1px;
border-color: ${Colors.theamTextColor};
border-radius: ${rw(5)}px;
align-items: center;
`
export const ProfileImage = styled.Image`
height: ${rh(10)}px;
width: ${rw(20)}px;
`
export const ProfileDetailsView = styled.View`
margin-left: ${rw(3)}px;
justify-content: center;
`
export const ProfileName = styled.Text`
color: ${Colors.theamTextColor};
font-size: ${rs(16)}px;
width: ${rw(50)}px;
`
export const GoInsideImage = styled.Image`
height: ${rh(4)}px;
width: ${rw(8)}px;
margin-left: ${rw(3)}px;
tint-color: ${Colors.theamTextColor};

`