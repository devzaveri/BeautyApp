import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/App/HomeScreen/HomeScreen';
import ScreenName from '../../helpers/ScreenNames';
import {Image} from 'react-native';
import {Colors, Images} from '../../helpers';
import {rh, rs, rw} from 'react-native-full-responsive';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      screenOptions={{headerShown: false}}
      name={ScreenName.app.HomeScreen}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.theamColor,
          height: rh(8),
        },
        tabBarLabelStyle: {
          fontSize: rs(18),
          color: Colors.theamTextColor,
        },
        tabBarItemStyle: {
          margin: 10,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={Images.home}
              resizeMode="contain"
              style={{
                height: rh(4),
                width: rw(8),
                tintColor: Colors.theamTextColor,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
