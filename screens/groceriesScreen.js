import React from 'react'
import { Text,View,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,FlatList,ScrollView } from 'react-native'
let groceriesList=require('./groceriesList.json')
console.log(groceriesList)
import {RFValue} from 'react-native-responsive-fontsize'
import firebase from 'firebase'
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath'


export default class GroceriesScreen extends React.Component {
    constructor(){
        super()
        this.state={
            groceries:{},
            unitTextInput:'',

        };
    }
    componentDidMount(){
        this.fetchItems()
    }
fetchItems=()=>{
    firebase.database().ref('items').on('value',(data)=>{
this.setState({
    groceries:data.val()
})
console.log(this.state.groceries)

    })

}

updateTransaction=()=>{
    this.props.navigation.navigate('bookingConfirmationScreen')
}
    
    renderItem = ({item,index}) => {
        return(
            <View>

            <View style={styles.flatListView}>
            
            <Text style={styles.text}>{this.state.groceries[item].item}</Text>
            <Text style={styles.text}>{this.state.groceries[item].unitPrice}</Text>
            <TextInput 
            style={styles.textInput}
              onChangeText = {(text) => {
                this.setState({
                  unitTextInput : text
                });
              }}
              value={this.state.unitTextInput[item.itemName]}
            />            </View>

            </View>
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}/>
                <View>
                    {/* <Image/> */}
                    <Text>Shop Groceries</Text>
                </View>
                <TouchableOpacity onPress={this.updateTransaction} style={styles.button}><Text style={styles.buttonText}>Order</Text></TouchableOpacity>
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
        )
    }
}
const styles=StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:'black'
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
        width:RFValue(50),
        height: RFValue(20),
        borderColor: "black",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        color: "black",
        margin:20

      },
       text: {
        color: "black",
        fontSize: RFValue(20),
        margin:10
      },
      button: {
        width: RFValue(70),
        height: RFValue(20),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(5),
        backgroundColor: "black",
        margin:10
      },
      buttonText:{
  color:'white',
  fontSize: RFValue(10),
  
      }


});
