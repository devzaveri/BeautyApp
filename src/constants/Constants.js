import { Dimensions } from "react-native";

import { name as appName } from "../../app.json";




var { EventEmitter } = require("fbemitter");

export const commonConstant = {
  /// ------------------------------------ App Common Constant ------------------------------------ ///

  appName: appName,

  token: null,
  emitter: new EventEmitter(),
  authorizationToken: "",
  appUser: null,
  isLanguageChanging: false,
  languageCode: "languageCode",
  currentLanguage: "",
  english: "en",
  currentScreenName: "",
  loaderDismiss: false,
  currentScreen: "",
  mobileConstant: null,
};

export const asyncStorageKeys = {
  carData: "carData",
  interval: "interval",
  threshold: "threshold",
  detectionMode: "detectionMode",
};

export const eventListenerKeys = {
  Login: "Login",
  Logout: "Logout",
  loginEvent: "loginEvent",
  logoutEvent: "logoutEvent",
};



export default {
  commonConstant,
  asyncStorageKeys,
  eventListenerKeys,
  
};
