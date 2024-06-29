import {
  MainComponent,
  MainHeaderView,
  OpenDrawerBtn,
  OpenDrawerImg,
  MainLogoView,
  MainLogo,
  MainBodyView,
} from './HomeScreenStyles';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Images} from '../../../helpers';
import Carousel from 'react-native-reanimated-carousel';

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
            <TouchableOpacity
              onPress={() => {
                console.log('Item: ', index);
              }}
              style={{
                flex: 1,
                borderWidth: 2,
                borderColor: Colors.theamTextColor,
                justifyContent: 'center',
                borderRadius: 20,
                margin: 10,
                
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
            </TouchableOpacity>
          )}
        />
      </MainBodyView>
    );
  }

  return (
    <MainComponent>
      {HeaderView()}

      {MainFunction()}
    </MainComponent>
  );
};

export default HomeScreen;
