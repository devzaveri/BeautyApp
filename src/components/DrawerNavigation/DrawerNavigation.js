import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '../AppNavigation/AppNavigation'; // Ensure this is correctly imported
import CustomDrawerContent from './CustomDrawerContent/CustomDrawerContent ';
import { Image } from 'react-native';
import { Colors, Images } from '../../helpers';
import { rh, rs, rw } from 'react-native-full-responsive';



const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
  return (
    
      <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Drawer.Screen  name="Home" component={AppNavigation}  options={{
           title: 'Home',
           drawerLabelStyle: {fontSize:rs(18) , color: Colors.theamTextColor},
           drawerIcon: ({focused}) => (
              <Image
              source={Images.home}
                 resizeMode='contain'
                 style={{height: rh(3) , width: rw(6), tintColor: Colors.theamTextColor , marginRight: rw(-3)}}
                 
              />
           ),
        }} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
 
  );
}

export default DrawerNavigation;
