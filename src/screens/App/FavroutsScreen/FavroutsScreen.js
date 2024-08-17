import {
  MainComponent,
  MainHeaderView,
  OpenDrawerBtn,
  OpenDrawerImg,
  MainLogoView,
  MainLogo,
  MainContainerView,
  MainDataList,
  AllDatView,
  MainContainerAllData,
  AddedImage,
  NameText,
  PriceText
} from './FavroutsScreenStyles'
import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Images } from '../../../helpers';
import ScreenName from '../../../helpers/ScreenNames';

const FavroutsScreen = ({navigation}) => {
  const items = useSelector((state) => state.items.items);
  const [allData , setAllData] = useState([])
  useEffect(()=> { 
    setAllData(items)
  },[])

  function HeaderView(){
    return(
      <MainHeaderView>
      <OpenDrawerBtn
        onPress={() => {
          navigation.goBack();
        }}>
        <OpenDrawerImg resizeMode="contain" source={Images.backbutton} />
      </OpenDrawerBtn>
      <MainLogoView>
        <MainLogo source={Images.MainLogoPng} />
      </MainLogoView>
    </MainHeaderView>
    )
  }
  function MainFunction() {
    return(
      <MainContainerView>
        <MainDataList  numColumns={2} data={allData} renderItem={({item})=> 
          handleAllData(item)
        } />
      </MainContainerView> 
    )
  }

  function handleAllData(item){
    return(
      <MainContainerAllData onPress={()=> {
        navigation.navigate(ScreenName.app.ItemDetails , {
          name: item.name,
          price: item.price,
          image: item.image,
          details: item.details
        })
      }}>
      <AllDatView>
        <AddedImage resizeMode='cover' source={item.image} />
        <NameText>{item.name}</NameText>
        <PriceText>Rs.{item.price}</PriceText>
      </AllDatView>
      </MainContainerAllData>
    )

  }

  return (
    <MainComponent>
    {HeaderView()}
   
    {MainFunction()}
   
  </MainComponent>
  )
}

export default FavroutsScreen