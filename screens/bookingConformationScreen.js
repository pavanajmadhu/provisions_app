import React from 'react'
import { Text,View,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,FlatList,ScrollView } from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'

export default class OrdersScreen extends React.Component {

    renderItem = ({item,index}) => {
        return(
            <View>

            <View style={styles.flatListView}>
            
            <Text style={styles.text}>name</Text>
            <Text style={styles.text}>unit</Text>
                      </View>

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
            <ScrollView>
           { /*   <FlatList
                    data = {}
                    renderItem={this.renderItem}
                    keyExtractor = {(item, index) => {
                        return index.toString();
                    }}                    
                />*/}
                <Text>total</Text>
                <View style={styles.buttonView}>
                <TouchableOpacity><Text>cancel</Text></TouchableOpacity>
                <TouchableOpacity><Text>Book</Text></TouchableOpacity>
                </View>

                
            </ScrollView>
            
        </View>        )}

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
        fontFamily: "Bubblegum-Sans",
        margin:10
      },
      buttonView:{
        flexDirection: "row",
        margin: 30,
        justifyContent:'center',
        alignItems:'center'
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
  fontFamily:'bubblegum-sans',
  fontSize: RFValue(10),
  
      }


});
