import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroceriesScreen  from './screens/groceriesScreen'
import AdministratorLoginScreen from './screens/loginAdministratorScreen'
import AddGroceries from './screens/addGroceriesScreen'
import AddNewGroceries from './screens/addNewGroceriesScreen'
import OrdersScreen from './screens/ordersScreen';

import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from './screens/loginScreen';
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

  loginScreen:LoginScreen,
  groceriesScreen:GroceriesScreen,
  administratorLoginScreen:AdministratorLoginScreen,
  AddGroceries:AddGroceries,
  groceriesScreen:GroceriesScreen,
  AddNewGroceries:AddNewGroceries,
  ordersScreen:OrdersScreen
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


