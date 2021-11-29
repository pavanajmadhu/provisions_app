import React from 'react'
import { Text,View,TouchableOpacity,TextInput,StyleSheet,SafeAreaView,Platform,StatusBar,FlatList,ScrollView } from 'react-native'

export default class AddNewGroceries extends React.Component {
    constructor(){
        super()
        this.state={
            nameTextInput:'',
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

<TextInput
               placeholder={'name'} 
      style={styles.textInput}
        onChangeaText = {(text) => {
          this.setState({
            nameTextInput:{text}
          });
        }}
        value={this.state.nameTextInput}
      /> 

<TextInput
               placeholder={'unit'} 
      style={styles.textInput}
        onChangeaText = {(text) => {
          this.setState({
            unitTextInput:{text}
          });
        }}
        value={this.state.unitTextInput}
      /> 

   <TextInput
               placeholder={'unitPrice'} 
      style={styles.textInput}
        onChangeaText = {(text) => {
          this.setState({
            unitPriceTextInput:{ text}
          });
        }}
        value={this.state.unitPriceTextInput}
      /> 
   <TextInput
               placeholder={'availabe stock'} 
      style={styles.textInput}
        onChangeaText = {(text) => {
          this.setState({
            stockTextInput:{text}
          });
        }}
        value={this.state.stockTextInput}
      /> 

<TouchableOpacity onPress={this.updateToFirebase}><Text>ADD</Text></TouchableOpacity>

            </View>
        )
    }
}

const styles=StyleSheet.create({




}
)