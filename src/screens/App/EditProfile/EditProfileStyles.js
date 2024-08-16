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
align-items: center;
padding-top: ${rh(5)}px;
padding-bottom: ${rh(5)}px;
`
export const ProfileImageView = styled.TouchableOpacity`
height: ${130}px;
width: ${130}px;
border-width: 1px;
justify-content: center;
align-items: center;
border-radius: ${rw(100)}px;
border-color: ${Colors.theamTextColor};
`
export const ProfileImage = styled.Image`
height: ${120}px;
width: ${120}px;
border-radius: ${rw(100)}px;
`
export const BoxContaoiner = styled.View`
margin-top: ${rh(3)}px;
`
export const NameText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamTextColor};
margin-left: ${rw(2)}px;
`
export const NameView = styled.View`
margin-top: ${rh(1)}px;
height: ${rh(6)}px;
width: ${rw(80)}px;
border-width: 1px;
border-color: ${Colors.theamTextColor};
border-radius: ${rw(3)}px;
`
export const NameInput = styled.TextInput`
color: ${Colors.theamTextColor};
padding-left: ${rw(3)}px;
padding-right: ${rw(3)}px;
`