import {
  MainComponent,
  HeaderComponentView,
  ItemImageBackground,
  OpenDrawerBtn,
  OpenDrawerImg,
  ItemName,
  MainContainerView,
  ItemDetailsText,
  PriceText,
  AddBtnView,
  AddFavroutBtn,
  AddText
} from './ItemDetailsStyles';
import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Images } from '../../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, setItems } from '../../../redux/action/action';

const ItemDetails = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState(0);
  const [addItem , setAddItem] = useState([])
  const [favrouts , setFavrouts] = useState(false)
  const [cart , setCart] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setName(route?.params?.name);
    setImage(route?.params?.image);
    setPrice(route?.params?.price);
    setDetails(route?.params?.details);
    setFavrouts(route?.params?.favrouts)
  }, []);

 

  function handleFavrouts(item) {
    setFavrouts(!favrouts)
    const SelectedItemDetails = {
      name: name,
      image: image,
      price: price,
      details: details,
      favrouts: favrouts? false : true
    }
    console.log("SelectedItemDetails====>" , SelectedItemDetails);
    

    // setAddItem(abc)
    dispatch(setItems(SelectedItemDetails))
    
  }

  useEffect(()=> {
    console.log("addItem" , addItem);
    
  },[addItem])

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
            <ItemDetailsText numberOfLines={5}>{details} </ItemDetailsText>
            <PriceText>Rs.{price}</PriceText>
            <AddBtnView>
              <AddFavroutBtn onPress={()=> {
                handleFavrouts()
              }}>
                    <AddText>Favorite</AddText>
              </AddFavroutBtn>
              <AddFavroutBtn>
              <AddText>Cart</AddText>
              </AddFavroutBtn>
            </AddBtnView>
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
