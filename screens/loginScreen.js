import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import LoadingScreen from './loadingSceen';




export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  componentDidMount() {
  }

  
  render() {
     
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
          
            <Text style={styles.appTitleText}>{`Provisions\nApp`}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('loadingScreen')}>
             
              <Text> sign in as customer   </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.props.navigation.navigate('administratorLoginScreen')}}>
              
              <Text> sign in as Administrator   </Text>
            </TouchableOpacity>

          </View>

        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appTitleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(40),
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: RFValue(100),
    height: RFValue(30),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(30),
    backgroundColor: 'white',
    margin:10
  },
 
  
 
 
});
