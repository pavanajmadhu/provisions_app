import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroceriesScreen  from './screens/groceriesScreen'
import AdministratorLoginScreen from './screens/loginAdministratorScreen'
import AddGroceries from './screens/addGroceriesScreen'
import AddNewGroceries from './screens/addNewGroceriesScreen'
import OrdersScreen from './screens/ordersScreen';
import BookingConfirmationScreen from './screens/bookingConformationScreen'
import UserLoginScreen from './screens/userLoginScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from './screens/loginScreen';
import LoadingScreen from './screens/loadingSceen';
import firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig)
export default class App extends React.Component {
  render(){
  return (
<AppContainer/>  
  );
  }
}


const SwitchNavigator =createSwitchNavigator({
  groceriesScreen:GroceriesScreen,
  loginScreen:LoginScreen,

  administratorLoginScreen:AdministratorLoginScreen,
  AddGroceries:AddGroceries,
  groceriesScreen:GroceriesScreen,
  AddNewGroceries:AddNewGroceries,
  ordersScreen:OrdersScreen,
  bookingConfirmationScreen:BookingConfirmationScreen,
  userLoginScreen:UserLoginScreen,
  loadingScreen:LoadingScreen
  })
  
  
  const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


