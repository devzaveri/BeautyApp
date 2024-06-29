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
export const MainBodyView = styled.View`

`