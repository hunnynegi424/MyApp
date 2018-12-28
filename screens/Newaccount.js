import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class Newaccount extends React.Component {
    render() {
        return(
            <View style={ styles.container }>
            <TextInput 
            style = { styles.inputbox }
            returnKeyType='next'
            placeholder= ' First Name'
            />
            <TextInput 
            style = { styles.inputbox }
            returnKeyType='next'
            placeholder= ' Last Name'
            />
            <TextInput 
            style = { styles.inputbox }
            returnKeyType='next'
            placeholder= ' Email'
            keyboardType='email-address'
            />
            <TextInput 
            style = { styles.inputbox }
            returnKeyType='next'
            placeholder= ' Password'
            secureTextEntry
            />
            <TextInput 
            style = { styles.inputbox }
            returnKeyType='go'
            placeholder= ' Confirm Password'
            secureTextEntry
            />
            <TouchableOpacity style={ styles.button }>
              <Text style={ styles.button_text}>Register</Text>
            </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7ed6df',
        justifyContent: 'center',
        textAlign: 'center',
      },
      inputbox: {
        backgroundColor: 'white',
        height: 40,
        margin: 5,
        borderRadius: 8,
        paddingLeft: 5,
      },
      button: {
        margin: 5,
        marginBottom: 65,
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
});
    