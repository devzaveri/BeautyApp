import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import {Colors} from '../../../helpers';

export const MainHeaderView = styled.View`
padding-top: ${rh(2)}px;
padding-bottom: ${rh(2)}px;
padding-left: ${rw(4)}px;
padding-right: ${rw(4)}px;
justify-content: center;
align-items: center;
`
export const AppLogo = styled.Image`
height: ${rh(15)}px;
width: ${rw(40)}px;
`