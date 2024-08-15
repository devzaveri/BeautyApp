import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/App/HomeScreen/HomeScreen';
import ScreenName from '../../helpers/ScreenNames';
import {Image} from 'react-native';
import {Colors, Images} from '../../helpers';
import {rh, rs, rw} from 'react-native-full-responsive';
import ProfileScreen from '../../screens/App/ProfileScreen/ProfileScreen';

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

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen screenOptions={{headerShown:false}} name={ScreenName.app.ProfileScreen} component={ProfileScreen} />
      
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabbarhideonkeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.theamColor,
          height: rh(7),
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
        name="Homes"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size , focused}) => (
            <Image
              source={Images.home}
              resizeMode="contain"
              style={{
                height: focused ? rh(8) : rh(3),
                width: focused ? rw(10) : rw(6),
                tintColor: Colors.theamTextColor,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size , focused}) => (
            <Image
              source={Images.profile}
              resizeMode="contain"
              style={{
                height: focused ? rh(8) : rh(3),
                width: focused ? rw(10) : rw(6),
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
