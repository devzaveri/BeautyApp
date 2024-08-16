import {
  MainComponent,
  HeaderComponentView,
  ItemImageBackground,
  OpenDrawerBtn,
  OpenDrawerImg,
  ItemName,
  MainContainerView
} from './ItemDetailsStyles';
import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Images } from '../../../helpers';

const ItemDetails = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  useEffect(() => {
    console.log('route====>', route?.params);
    setName(route?.params?.name);
    setImage(route?.params?.image);
    setPrice(route?.params?.price);
  }, []);

  function HeaderContainer() {
    return (
      <HeaderComponentView style={{borderRadius: 10}}>
        <ItemImageBackground
          imageStyle={{
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
          resizeMode="cover"
          source={image}>
          <OpenDrawerBtn
            onPress={() => {
              navigation.goBack();
            }}>
            <OpenDrawerImg resizeMode="contain" source={Images.backbutton} />
          </OpenDrawerBtn>
        </ItemImageBackground>
        
      </HeaderComponentView>
    );
  }
  function MainContainer() {
    return(
        <MainContainerView>
            <ItemName>{name}</ItemName>
        </MainContainerView>
    )
  }

  return (
    <MainComponent>
      {HeaderContainer()}
      {MainContainer()}
    </MainComponent>
  );
};

export default ItemDetails;
