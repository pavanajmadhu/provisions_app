import React from 'react'
import { Text,View,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,FlatList,ScrollView } from 'react-native'
let groceriesList=require('./groceriesList.json')
console.log(groceriesList)
import {RFValue} from 'react-native-responsive-fontsize'



export default class GroceriesScreen extends React.Component {
    constructor(){
        super()
        this.state={
            groceries:groceriesList,
            unitTextInput:'',
        };
    }

    renderItem = ({item,index}) => {
        return(
            <View>

            <View style={styles.flatListView}>
            
            <Text style={styles.text}>{this.state.groceries[index].itemName}</Text>
            <Text style={styles.text}>{this.state.groceries[index].unitprice}</Text>
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
                <TouchableOpacity><Text>Order</Text></TouchableOpacity>
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
        color:'#eaeb71'
    },
    safeAreaView:{
     marginTop:(Platform.OS==='android') ? StatusBar.currentHeight : 0
    },
    flatListView: {
        flexDirection: "row",
        margin: 20
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
        fontSize: RFValue(20),
        fontFamily: "Bubblegum-Sans",
        margin:10
      },


});
