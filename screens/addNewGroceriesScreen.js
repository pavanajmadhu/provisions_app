import React from 'react'
import { Text,View,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,FlatList,ScrollView } from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import firebase from 'firebase'
import { firebaseConfig } from '../config'

export default class AddNewGroceries extends React.Component {
    constructor(){
        super()
        this.state={
            nameTextInput2:'',
            unitTextInput2:'',
            stockTextInput2:'',
            unitPriceTextInput2:'',
        };
    }
  addToFirebase=()=>{
      var data={itemName:this.state.nameTextInput2,
        unit:this.state.unitTextInput2,
        stock:this.state.stockTextInput2,
        unitPrice:this.state.unitPriceTextInput2
      }
      console.log(data)
    firebase.database().ref('items/'+this.state.nameTextInput2).update(data)
    }
    
    render(){
        return(
            <View>
                <View style={styles.titleContainer} >
            <Text style={styles.titleText}>AddNewGroceries</Text>
               </View>

<Image/>

<TextInput
               placeholder={'name'} 
      style={styles.textInput}
        onChangeText = {(text) => {
          this.setState({
            nameTextInput2:{text}
          });
        }}
        value={this.state.nameTextInput2}
      /> 

<TextInput
               placeholder={'unit'} 
      style={styles.textInput}
        onChangeText = {(text) => {
          this.setState({
            unitTextInput2:{text}
          });
        }}
        value={this.state.unitTextInput2}
      /> 

   <TextInput
               placeholder={'unitPrice'} 
      style={styles.textInput}
        onChangeText = {(text) => {
          this.setState({
            unitPriceTextInput2:{ text}
          });
        }}
        value={this.state.unitPriceTextInput2}
      /> 
   <TextInput
               placeholder={'availabe stock'} 
      style={styles.textInput}
        onChangeText = {(text) => {
          this.setState({
            stockTextInput2:{text}
          });
        }}
        value={this.state.stockTextInput2}
      /> 

<TouchableOpacity onPress={this.addToFirebase}><Text>ADD</Text></TouchableOpacity>

            </View>
        )
    }
}

const styles=StyleSheet.create({


  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    color:'#eaeb71'
},
safeAreaView:{
 marginTop:(Platform.OS==='android') ? StatusBar.currentHeight : 0
},
flatListView: {
    flexDirection: "row",
    margin: 20,
    justifyContent:'center',
    alignItems:'center'
  },
textInput: {
    width: 75,
    height: 20,
    borderWidth: 1.5,
    borderRightWidth: 10,
    fontSize: 20,
    margin:10

  },
   text: {
    color: "black",
    fontSize: RFValue(10),
    margin:10
  },
  button:{
    height:20,
    width:80,
    borderRadius:20,
    color:'white'
  },
  buttonText:{
color:'black',
  },
  titleText:{
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(40),
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },

}
)