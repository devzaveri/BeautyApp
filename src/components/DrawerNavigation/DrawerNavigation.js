import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '../AppNavigation/AppNavigation'; // Ensure this is correctly imported



const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
  return (
    
      <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Drawer.Screen  name="Home" component={AppNavigation} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
 
  );
}

export default DrawerNavigation;
