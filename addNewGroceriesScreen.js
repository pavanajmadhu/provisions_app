import React from 'react'
import { Text,View,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,FlatList,ScrollView } from 'react-native'

export default class AddNewGroceries extends React.Component {
    constructor(){
        super()
        this.state={
            unitTextInput:'',
            stockTextInput:'',
            unitPriceTextInput:'',
        };
    }
    
    render(){
        return(
            <View>
                <View>
            <Text>AddNewGroceries</Text>
               </View>

<Image/>

<TextInput></TextInput>

<TextInput></TextInput>

<TextInput></TextInput>


<TouchableOpacity><Text>ADD</Text></TouchableOpacity>

            </View>
        )
    }
}

const styles=StyleSheet.create({




}
)