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
margin-right: ${rw(10)}px;
`
export const MainLogo = styled.Image`
height: ${rh(10)}px;
width: ${rw(20)}px;
`
export const MainContainerView = styled.View`
flex: 1;
`
export const MainDataList = styled.FlatList`

`
export const AllDatView = styled.View`
padding-top: ${rh(2)}px;
padding-bottom: ${rh(2)}px;
width: ${rw(40)}px;
border-width: 1px;
border-color: ${Colors.theamTextColor};
border-radius: ${rw(5)}px;
/* align-items: center; */
`
export const MainContainerAllData = styled.TouchableOpacity`
flex: 1;
align-items: center;
margin-top: ${rh(2)}px;
`
export const AddedImage = styled.Image`
height: ${rh(20)}px;
width: ${rw(35)}px;
border-radius: ${rw(5)}px;
align-self: center;
`
export const NameText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamTextColor};
margin-left: ${rw(2)}px;
`
export const PriceText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamTextColor};
margin-left: ${rw(2)}px;
margin-top: ${rh(1)}px;
` 