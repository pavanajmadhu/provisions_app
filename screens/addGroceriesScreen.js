import React from 'react'
import { Text,View,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,FlatList,ScrollView,Image } from 'react-native'
let groceriesList=require('./groceriesList.json')
console.log(groceriesList)
import {RFValue} from 'react-native-responsive-fontsize'
import firebase from 'firebase'

export default class AddGroceries extends React.Component {

  constructor(){
    super()
    this.state={
        groceries:groceriesList,
        unitTextInput:{},
        stockTextInput:{},
        unitPriceTextInput:{},
    };
}
updateToFirebase=(itemname)=>{
  var data={item:itemname,
    unit:this.state.unitTextInput[itemname],
    stock:this.state.stockTextInput[itemname],
    unitPrice:this.state.unitPriceTextInput[itemname]
  }
  console.log(data)
firebase.database().ref('items/'+itemname).update(data)
}
renderItem = ({item}) => {
  console.log(item)
  return(
      <View>

      <View style={styles.flatListView}>
      <Text style={styles.text}>{item.itemName}</Text>


      <TextInput
               placeholder={'unit'} 
      style={styles.textInput}
        onChangeText = {(text) => {
          this.setState({
            unitTextInput:{[item.itemName] : text}
          });
        }}
        value={this.state.unitTextInput[item.itemName]}
      /> 

      <TextInput 
                     placeholder={'Stock'} 

      style={styles.textInput}
        onChangeText = {(text) => {
          this.setState({
            stockTextInput:{[item.itemName] : text}
          });
        }}
        value={this.state.stockTextInput[item.itemName]}
      />   


               <TextInput
               placeholder={'unitPrice'} 
      style={styles.textInput}
        onChangeaText = {(text) => {
          this.setState({
            unitPriceTextInput:{[item.itemName] : text}
          });
        }}
        value={this.state.unitPriceTextInput[item.itemName]}
      /> 

      <TouchableOpacity style={styles.button} onPress={()=>this.updateToFirebase(item.itemName)}> <Text style={styles.buttonText}> UPDATE </Text> </TouchableOpacity>

             </View>

      </View>
  );
}
  render(){
  return (
<View style={styles.container}>
  <View>

      <View>
      <Text>add groceries</Text>
      <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('addNewGroceries')}}>add new grocery</TouchableOpacity>
      </View>

  <Image/>

  </View>

  <ScrollView>
                    <FlatList
                        data = {this.state.groceries}
                        renderItem={this.renderItem}
                        keyExtractor = {(item, index) => {
                            return index.toString();
                        }}                    
                    />
                </ScrollView>


</View>

  );
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
      fontFamily: "Bubblegum-Sans",
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
fontFamily:'bubblegum-sans'
    }


});
