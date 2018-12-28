import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

onMainNavigate = () => {
  this.props.navigation.navigate('NewUser');
};

export default class Login extends Component {
  
  render(){
      return(
        <View style = { styles.container }>
            <TextInput 
            style = { styles.inputbox }
            returnKeyType='next'
            placeholder= ' Email'
            keyboardType='email-address'
            />
            <TextInput 
            style = { styles.inputbox }
            returnKeyType='go'
            placeholder= ' Password'
            secureTextEntry
            />
            <TouchableOpacity style={ styles.button }>
              <Text style={ styles.button_text}>Login</Text>
            </TouchableOpacity>
            <Text style={ styles.forgottenpassword}>Forgotten Password?</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
      },
    inputbox: {
        backgroundColor: 'white',
        height: 40,
        margin: 5,
        borderRadius: 8,
        padding: 5,
      },
      button: {
        margin: 5,
        height: 40,
        backgroundColor: '#22a6b3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
      button_text: {
        color: 'white',
        fontWeight: 'bold',
      },
      forgottenpassword: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#22a6b3',
      },
})