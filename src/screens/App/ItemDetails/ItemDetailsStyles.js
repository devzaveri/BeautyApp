import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import {Colors} from '../../../helpers';

export const MainComponent = styled.View`
flex: 1;
background: ${Colors.theamColor};
`
export const HeaderComponentView = styled.View`

`
export const ItemImageBackground = styled.ImageBackground`
height: ${rh(50)}px;
width: ${rw(100)}px;
/* border-bottom-left-radius: ${rw(10)}px; */
/* border-bottom-right-radius: ${rw(10)}px; */

`
export const OpenDrawerBtn = styled.TouchableOpacity`
margin-left: ${rw(8)}px;
margin-top: ${rh(3)}px;
border-width: 1px;
height: ${rh(5)}px;
width: ${rw(10)}px;
justify-content: center;
align-items: center;
border-radius: ${rw(100)}px;
border-color: ${Colors.theamTextColor};
`
export const OpenDrawerImg = styled.Image`
height: ${rh(3)}px;
width: ${rw(6)}px;
tint-color: ${Colors.theamTextColor};
`
export const ItemName = styled.Text`
color: ${Colors.theamTextColor};
font-size: ${rs(26)}px;
`
export const MainContainerView = styled.View`
flex: 1;
padding-top: ${rh(2)}px;
padding-bottom: ${rh(4)}px;
padding-left: ${rw(6)}px;
padding-right: ${rw(6)}px;
`
export const ItemDetailsText = styled.Text`
color: ${Colors.orignalPriceText};
font-size: ${rs(12)}px;
`
export const PriceText = styled.Text`
color: ${Colors.theamTextColor};
font-size: ${rs(20)}px;
margin-top: ${rh(3)}px;
`
export const AddBtnView = styled.View`
position: absolute;
bottom: ${rh(2)}px;
justify-content: space-between;
width: ${rw(100)}px;
padding-left: ${rw(6)}px;
padding-right: ${rw(6)}px;
flex-direction: row;
`
export const AddFavroutBtn = styled.TouchableOpacity`
/* flex: 1; */
border-width: 1px;
height: ${rh(7)}px;
width: ${rw(40)}px;
border-radius: ${rw(2)}px;
border-color: ${Colors.theamTextColor};
justify-content: center;
align-items: center;
`
export const AddText = styled.Text`
color: ${Colors.theamTextColor};
font-size: ${rs(16)}px;
`