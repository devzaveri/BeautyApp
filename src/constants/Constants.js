// // import React from 'react'
// import {Dimensions, NetInfo, Platform} from 'react-native';
// import {Fonts, Colors} from '../Theme';



// var {EventEmitter} = require('fbemitter');



// export const action = {
//   // Photo Gallery
 
// };

// /// Colors
// // export const colors = {

// // };

// // export const API = {
 
// // };

// export const commonConstant = {
//   /// Screen Width And Height
//   UserToken: '',
//   scrWidth: Dimensions.get('screen').width,
//   scrHeight: Dimensions.get('screen').height,
//   arrCountry: [],
//   notificationToken: null,
//   alertTitle: 'PHPass',
//   emitter: new EventEmitter(),
//   timeFormat: 'YYYY-MM-DD HH:mm:ss',
//   appUser: null,
//   societyName: '',
//   society_id: '',
//   tanent: [],
//   imagePath: APIConfig.baseImagePath,
//   isInternetConnected: true,
//   activeOpacity: 0.8,
//   tenants: [],
//   badgeCount: 0,

//   // // Fire Event Key
//   loginEvent: 'loginEvent',
//   logoutEvent: 'logoutEvent',

//   // /// Common Functions
//   token_expired: 'token_expired',

//   // /// Font Family
//   themeFont: 'Poppins-Light',
//   themeFontBold: 'Poppins-Bold',
//   themeFontRegular: 'Poppins-Regular',
//   themeFontMedium: 'Poppins-Medium',
//   themeFontSemiBold: 'Poppins-SemiBold',

//   // Error Messages
//   invalidName: 'Please enter valid name.',
//   invalidEmail: 'Please enter valid email address.',
//   invalidOccupation: 'Please enter valid occupation.',
//   invalidPassword: 'Please enter password.',
//   passwordNotMatch: 'Your password and confirmation password do not match.',
//   invalidSeries: 'Please enter valid series number',
//   invalidDigit: 'Please enter only four digits',
//   emptyState: 'Please select state',
//   emptyDistrict: 'Please select district',
//   emptyName: 'Please enter name',
//   emptyGender: 'Please enter gender',
//   emptyAge: 'Please enter Age',
//   selectDate: 'Please select Date',
//   enterYourPurpose: 'Please enter purpose',
//   enterDuration: 'Please enter duration',
//   totalGuest: 'Please enter total guest',
//   staffLogin: false,
// };

// export const responseSuccessMessage = {
//   login: 'Login successfully.',
// };

// export const asyncStorageKeys = {
//   UserToken: 'UserToken',
//   VehicleImage: 'VehicleImage',
//   AppUserDetail: 'AppUserDetail',
//   UserRole: 'UserRole',
//   notificationToken: 'notificationToken',
//   currentScreen: 'currentScreen',
//   currentSociety: 'currentSociety',
//   SocietyList: 'SocietyList',
//   BadgeCount: 'BadgeCount',
//   tanent: 'tanent',
//   isProfileRedirect: 'isProfileRedirect',
// };

// export const screenName = {
//   DrawerToggle: 'DrawerToggle',
//   LoginScreen: 'LoginScreen',
//   SignUpScreen: 'SignUpScreen',
//   ForgotPasswordScreen: 'ForgotPasswordScreen',
//   HomeScreen: 'HomeScreen',
//   UserProfile: 'UserProfile',
//   Vehicle: 'Vehicle',
//   AddNewVehicle: 'AddNewVehicle',
//   PhotoGallery: 'PhotoGallery',
//   Event: 'Event',
//   Committee: 'Committee',
//   Settings: 'Settings',
//   CommonContacts: 'CommonContacts',
//   Notice: 'Notice',
//   Complain: 'Complain',
//   Users: 'Users',
//   Chat: 'Chat',
//   GalleryDetail: 'GalleryDetail',
//   ComplainDetail: 'ComplainDetail',
//   AddComplain: 'AddComplain',
//   FindVehicle: 'FindVehicle',
//   Polling: 'Polling',
// };

// export const alertMsg = {};

// export const debugLog = log => {
//   if (__DEV__) {
//   }
// };

// export const setUserData = UserData => {
//   const headers = APIConfig.headers;
//   if (UserData && UserData.token) {
//     headers.Authorization = UserData.token;
//     commonConstant.appUser = UserData.userDetail;
//     commonConstant.society_id = UserData.userDetail.society_id.toString();
//   }
//   axios.defaults.headers = headers;
// };

// export const checkInternetAvailability = () => {
//   NetInfo.getConnectionInfo().then(connectionInfo => {});
// };

// export const getUniqueArr = Arr => {
//   return Array.from(new Set(Arr.map(e => JSON.stringify(e)))).map(e =>
//     JSON.parse(e),
//   );
// };

// export const getDeepClone = obj => {
//   return JSON.parse(JSON.stringify(obj));
// };

// export const fontScale = (font, factor = 0.5) => {
//   // const pxRatio = PixelRatio.get() || 1
//   // return font / (pxRatio * Platform.select({ ios: 1, android: 1 }))
//   // const guidelineBaseHeight = 736
//   // return font / (pxRatio * Platform.select({ ios: 1.5, android: 1 }))

//   const guidelineBaseWidth = Platform.select({ios: 414, android: 540});
//   // const guidelineBaseWidth = Platform.select({ ios: 375, android: 540 })
//   const scale = font => (commonConstant.scrWidth / guidelineBaseWidth) * font;
//   return font + (scale(font) - font) * factor;

//   // const tempHeight = (16 / 9) * width
//   // return Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(width, 2)) * (font / 100)
// };

// export const setFont = (
//   fontFamily = Fonts.fonts.themeFontRegular,
//   fontSize = fontScale(17),
//   color = Colors.blueShade34,
//   other = {},
// ) => {
//   const fontStyle = {
//     fontFamily: fontFamily,
//     fontSize: fontScale(fontSize),
//     color: color,
//   };
//   return [fontStyle, other];
// };

// export const tokenCheck = response => {
//   if (response.status === errorCode.TokenExpire) {
//   } else if (response.status === errorCode.InValidEmailOrPassword) {
//     if (response.data.message === 'invalid_email_or_password') {
//       Alerts.showAlert(strings('errorMessage.inValidEmail'));
//     } else {
//       Alerts.showAlert(response.data.message);
//     }
//   } else if (response.status === errorCode.server) {
//     Alerts.showAlert(strings('errorMessage.serverError'));
//   } else if (
//     response.data.message &&
//     response.data.message === errorCode.TimeOut
//   ) {
//     Alerts.showAlert(strings('errorMessage.timeOut'));
//   } else if (
//     response.data.message &&
//     response.data.message === errorCode.NetworkError
//   ) {
//     Alerts.showAlert(strings('errorMessage.netWorkError'));
//   } else if (response.data.message && response.status === errorCode.Msg) {
//     Alerts.showAlert(response.data.message);
//   } else {
//     if (response.data.message) {
//       Alerts.showAlert(response.data.message);
//     }
//   }
// };

// export const errorCode = {
//   TokenExpire: 401,
//   Invalid: 409,
//   Msg: 400,
//   server: 500,
//   InValidEmailOrPassword: 422,
//   TimeOut: 'ECONNABORTED',
//   NetworkError: 'Network Error',
// };

// export const ErrorHandling = error => {
//   if (error.status === 401) {
//     return error;
//   } else if (error.response) {
//     if (error.response.status !== 400) {
//       error.response.data &&
//         error.response.data.message &&
//         Alerts.showAlert(error.response.data.message);
//     }
//     return error.response;
//   } else if (error.message && error.message === 'Network Error') {
//     Alerts.showNetworkAlert();
//     return error;
//   } else {
//     Alerts.showAlert('Oops! something went wrong');
//     return error;
//   }
// };

// export default {
//   action,
//   colors,
//   commonConstant,
//   debugLog,
//   screenName,
//   alertMsg,
//   responseSuccessMessage,
//   asyncStorageKeys,
//   setUserData,
//   getUniqueArr,
//   checkInternetAvailability,
//   API,
//   getDeepClone,
//   setFont,
//   ErrorHandling,
//   fontScale,
//   tokenCheck,
//   errorCode,
// };
