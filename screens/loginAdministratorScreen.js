import React, { Component } from 'react';
import { Button, View, Text, Image, TextInput,TouchableOpacity ,StyleSheet} from 'react-native';
import firebase from 'firebase'
import {RFValue} from 'react-native-responsive-fontsize'

export default class administratorLoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      Email:'',
      Password:''
    }
  }
  loginCheck = async ()=>{
    var {Email,Password}=this.state

    if(Email && Password){
        try{
            var response=await firebase.auth().signInWithEmailAndPassword(Email,Password)
            if(response){
              this.props.navigation.navigate('AddGroceries')
            }
        }catch(error){
          alert(error.message)

        }
    }else{
      alert('fill the Credentials Correctly')
    }

  }
  render(){
    return(
      <View style={styles.container}>
       <TextInput 
              style={styles.textInput} 
              placeholder="Email" 
              onChangeText = {(text) => {
                this.setState({
                  Email : text
                });
              }}
              value={this.state.Email}
            />
             <TextInput 
              style={styles.textInput} 
              secureTextEntry={true}
              placeholder="password" 
              onChangeText = {(text) => {
                this.setState({
                  Password : text
                });
              }}
              value={this.state.Password}
            />

            <TouchableOpacity style={styles.submitButton} onPress={this.loginCheck}> <Text>login as Administrator</Text></TouchableOpacity>
            </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor: '#15193c',

  },
  textInput : {
    width:RFValue(150),
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    margin:20
  },
   submitButton : {
    width: RFValue(100),
    height: RFValue(30),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(10),
    backgroundColor: 'white',
  }
 
})