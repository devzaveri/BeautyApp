import {
  MainComponent,
  MainHeaderView,
  OpenDrawerBtn,
  OpenDrawerImg,
  MainLogoView,
  MainLogo,
  MainBodyView,
  CarouselBtn,
  CarouselView,
  AllItemsMainView,
  TrandingText,
  ItemText,
  TrandingItemView,
  TrandingItemList,
  HandleItemMainView,
  ItemView,
  ItemImage,
  ItemName,
  OrignalPrice,
  PriceView,
  DisPrice,
  ShowDiscountViews,
  DiscountText,
  TrandingView,
  ShowMoreView,
  TrandingItemListTextview,
  ShowMorebtn,
  ShowMoreText,
  AllItemContainer
} from './HomeScreenStyles';
import {View, Text, Dimensions, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Images} from '../../../helpers';
import Carousel from 'react-native-reanimated-carousel';
import ScreenName from '../../../helpers/ScreenNames';

const HomeScreen = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const data = [
    {
      name: 'B1',
      image: Images.B1,
      id: 1,
    },
    {
      name: 'B2',
      image: Images.B2,
      id: 2,
    },
    {
      name: 'B3',
      image: Images.B3,
      id: 3,
    },
    {
      name: 'B4',
      image: Images.B4,
      id: 4,
    },
    {
      name: 'B5',
      image: Images.B5,
      id: 5,
    },
    {
      name: 'B6',
      image: Images.B6,
      id: 6,
    },
  ];

  const trandingItem =[
    {
      name: "Item 1",
      image: Images.P1,
      id:1,
      price: 1500,
      discount: 20
    },
    {
      name: "Item 2",
      image: Images.P2,
      id:2,
      price: 1200,
      discount: 25
    },
    {
      name: "Item 3",
      image: Images.P3,
      id:3,
      price: 3500,
      discount: 20
    },
    {
      name: "Item 4",
      image: Images.P4,
      id:4,
      price: 5000,
      discount: 40
    },
    {
      name: "Item 5",
      image: Images.P5,
      id:5,
      price: 2300,
      discount: 30
    },
    {
      name: "Item 6",
      image: Images.P6,
      id:6,
      price: 4000,
      discount: 50
    },
  ]

  const allData = [
    {
      name: "Item 1",
      image: Images.P6,
      id:1,
      price: 4000,
      discount: 50
    },
    {
      name: "Item 2",
      image: Images.P7,
      id:2,
      price: 2500,
      discount: 50
    },
    {
      name: "Item 3",
      image: Images.P8,
      id:3,
      price: 1599,
      discount: 50
    },
    {
      name: "Item 4",
      image: Images.P9,
      id:4,
      price: 2000,
      discount: 50
    },
    {
      name: "Item 5",
      image: Images.P3,
      id:5,
      price: 3200,
      discount: 50
    },
    {
      name: "Item 6",
      image: Images.P5,
      id:6,
      price: 1000,
      discount: 50
    },
    {
      name: "Item 7",
      image: Images.P1,
      id:7,
      price: 2000,
      discount: 50
    },
    {
      name: "Item 8",
      image: Images.P2,
      id:8,
      price: 2000,
      discount: 50
    },
    {
      name: "Item 9",
      image: Images.P4,
      id:9,
      price: 2700,
      discount: 50
    },
  ]

  useEffect(() => {
    console.log('Home');
  });

  function HeaderView() {
    return (
      <MainHeaderView>
        <OpenDrawerBtn
          onPress={() => {
            navigation.openDrawer();
          }}>
          <OpenDrawerImg resizeMode="contain" source={Images.drawer} />
        </OpenDrawerBtn>
        <MainLogoView>
          <MainLogo source={Images.MainLogoPng} />
        </MainLogoView>
        <OpenDrawerBtn
          onPress={() => {
            // navigation.openDrawer()
          }}>
          <OpenDrawerImg resizeMode="contain" source={Images.notification} />
        </OpenDrawerBtn>
      </MainHeaderView>
    );
  }

  function MainFunction() {
    return (
      <MainBodyView>
        <CarouselView width={width}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={data}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          scrollAnimationDuration={10000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item, index}) => (
            <CarouselBtn
              onPress={() => {
                console.log('Item: ', index);
              }}>
              <Image
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 20,
                  // margin: 20,
                  width: '100%',
                }}
                resizeMode='cover'
                source={item.image}
              />
            </CarouselBtn>
          )}
        />
        </CarouselView>
        {ItemsBody()}
        {AllItemsBody()}
      </MainBodyView>
    );
  }
  function AllItemsBody(){
    return(
      <AllItemContainer>
        <TrandingView>
          <TrandingItemListTextview>
        <TrandingText>All Item</TrandingText>
        </TrandingItemListTextview>
        <ShowMoreView>
          <ShowMorebtn>
            <ShowMoreText>Show more</ShowMoreText>
          </ShowMorebtn>
          </ShowMoreView>
        </TrandingView>
        <TrandingItemView>
          <TrandingItemList showsHorizontalScrollIndicator={false} data={allData} horizontal={true} renderItem={({item , index}) => HandleAllItemfunc(item , index)} />
        </TrandingItemView>
      </AllItemContainer>
    )
  }

  function ItemsBody(){
    return(
      <AllItemsMainView>
        <TrandingView>
          <TrandingItemListTextview>
        <TrandingText>Tranding</TrandingText>
        <ItemText>Item</ItemText>
        </TrandingItemListTextview>
        <ShowMoreView>
          <ShowMorebtn>
            <ShowMoreText>Show more</ShowMoreText>
          </ShowMorebtn>
          </ShowMoreView>
        </TrandingView>
        <TrandingItemView>
          <TrandingItemList showsHorizontalScrollIndicator={false} data={trandingItem} horizontal={true} renderItem={({item , index}) => HandleTrandingItemfunc(item , index)} />

        </TrandingItemView>
      </AllItemsMainView>
    )
  }

  function HandleTrandingItemfunc(item , index){
    return(
     <HandleItemMainView onPress={()=> {
      navigation.navigate(ScreenName.app.ItemDetails , {
        image: item.image,
        name: item.name,
        price: item.price
      })
     }}>
      
        <ItemView>
          <ItemImage resizeMode='cover' source={item.image} />
          <ItemName>{item.name}</ItemName>
          <PriceView>
          <OrignalPrice>Rs.{item.price}</OrignalPrice>
          <DisPrice>Rs.{item.price * (100 - item.discount) / 100}</DisPrice>
          </PriceView>
        </ItemView>
        <ShowDiscountViews>
          <DiscountText>{item.discount}%</DiscountText>
        </ShowDiscountViews>
     </HandleItemMainView>
    )
  }
  function HandleAllItemfunc(item , index){
    return(
     <HandleItemMainView>
      
        <ItemView>
          <ItemImage resizeMode='cover' source={item.image} />
          <ItemName>{item.name}</ItemName>
          <PriceView>
          <DisPrice>Rs.{item.price}</DisPrice>
          </PriceView>
        </ItemView>
        
     </HandleItemMainView>
    )
  }

  return (
    <MainComponent>
      {HeaderView()}
      <ScrollView>
      {MainFunction()}
      </ScrollView>
    </MainComponent>
  );
};

export default HomeScreen;
