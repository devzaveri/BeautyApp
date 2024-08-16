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
flex: 1;
/* padding-left: ${rw(1)}px;
padding-right: ${rw(2)}px; */
`
export const CarouselBtn = styled.TouchableOpacity`
 flex: 1;
border-width: 2px;
border-color: ${Colors.theamTextColor};
justify-content: center;
border-radius: 20px;
margin: 10px;
`

export const CarouselView = styled.View`
/* border-width: 5px; */
height: ${$props => $props.width / 2}px;
`
export const AllItemsMainView = styled.View`
flex: 1;
padding-left: ${rw(3)}px;
`
export const TrandingItemListTextview = styled.View`
margin-top: ${rh(3)}px;

`
export const TrandingText = styled.Text`
font-size: ${rs(24)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(1)}px;
`
export const ItemText = styled.Text`
font-size: ${rs(24)}px;
color: ${Colors.theamTextColor};
letter-spacing: ${rw(1)}px;
`
export const TrandingItemView = styled.View``
export const TrandingItemList = styled.FlatList`
`
export const HandleItemMainView = styled.TouchableOpacity`
`
export const ItemView = styled.View`
padding-top: ${rh(1)}px;
padding-bottom: ${rh(1)}px;
margin-right: ${rw(5)}px;
border-radius: 10px;
`
export const ItemImage = styled.Image`
height: ${rh(25)}px;
width: ${rw(35)}px;
border-radius: 10px;
`
export const ItemName = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.theamTextColor};
margin-left: ${rw(1)}px;
margin-top: ${rh(0.5)}px;
`
export const PriceView = styled.View`
flex-direction: row;
`
export const OrignalPrice = styled.Text`
font-size: ${rs(12)}px;
color: ${Colors.orignalPriceText};
margin-left: ${rw(1)}px;
text-decoration: line-through;
`
export const DisPrice = styled.Text`
margin-left: ${rw(1)}px;
font-size: ${rs(12)}px;
color: ${Colors.theamTextColor};
margin-left: ${rw(1)}px;
`
export const ShowDiscountViews = styled.View`
position: absolute;
top: ${rh(2)}px;
right: ${rw(6)}px;
padding-top: ${rh(0.5)}px;
padding-bottom: ${rh(0.5)}px;
padding-left: ${rw(2)}px;
padding-right: ${rw(2)}px;
background: ${Colors.theamTextColor};
border-radius: ${rw(10)}px;
`
export const DiscountText = styled.Text`
font-size: ${rs(10)}px;
color: ${Colors.black};
`
export const TrandingView = styled.View`
flex-direction: row;
`
export const ShowMoreView = styled.View`
flex: 1;
align-items: center;
justify-content: flex-end;
flex-direction: row;
padding-right: ${rw(3)}px;
`
export const ShowMorebtn = styled.TouchableOpacity`

`
export const ShowMoreText= styled.Text`
color: ${Colors.theamTextColor};
font-size: ${rs(14)}px;
`
export const AllItemContainer = styled.View`
flex: 1;
padding-left: ${rw(3)}px;
margin-top: ${rh(2)}px;
`