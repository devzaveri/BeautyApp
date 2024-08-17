
// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState, createContext, useRef} from 'react';

import {
  View,
  StatusBar,
  LogBox,
  Platform,
  Dimensions,
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';




// import  from './src/helpers/Constants';
import {Colors} from './src/helpers';
import Loader from './src/helpers/Loader';
import {Provider, useDispatch} from 'react-redux';
import store from './src/redux/store/store';
import {addItem} from './src/redux/action/action';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Constants, {commonConstant} from './src/constants/Constants';
import Router from './src/routes/Route/Router';

function App() {
  const [loader, setLoader] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  // const dispatch = useDispatch();
  const {height, width} = Dimensions.get('window');

  const aspectRatio = height / width;

  // useEffect(() => {
  //   getUser();
  // }, []);

  // const getUser = async () => {
  //   try {
  //     const userData = JSON.parse(await AsyncStorage.getItem("carData"));
  //     console.log("userData=======>", userData);
  //     dispatch(addItem(userData));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    console.log('helo app-------');
  
    Constants.commonConstant.emitter.addListener(
      Constants.eventListenerKeys.loginEvent,
      () => {
        getData();
        setTimeout(() => {
          setLoader(false);
          setIsAuth(true);
        }, 2000);
        // console.log('Login--------->');
      },
    );
    Constants.commonConstant.emitter.addListener(
      Constants.eventListenerKeys.logoutEvent,
      async () => {
      
        setIsAuth(false);
      
        Constants.commonConstant.authorizationToken = '';
        // Constants.commonConstant.currentLanguage = "en";
        // Constants.commonConstant.isLanguageChanging = false;
        Constants.commonConstant.appUser = null;
        let headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        Axios.defaults.headers = headers;

        getData();
      },
    );

    setTimeout(() => {
      getData();
    }, 100);
  }, []);

  async function getData() {
    // await AsyncStorage.getItem(Constant.asyncStorageKeys.LoginDetails).then(
    //   async res => {
    //     const newRes = JSON.parse(res);
    //     if (JSON.parse(res).is_verified === true) {
    //       const headers = ApiConfig.headers;
    //       headers.Authorization = `Bearer ${newRes?.token}`;
    //       let appUser = newRes;
    //       Constants.commonConstant.appUser = appUser;
    //       Axios.defaults.headers = headers;
    //       ApiConfig.headers = headers;
    //       setIsAuth(true);
    //     } else {
    //       setIsAuth(false);
    //     }
    //   },
    // );
    // await AsyncStorage.clear();
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          
          
          <Router isAuthed={isAuth} />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
