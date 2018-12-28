import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import Newaccount from './Newaccount';

export default class Welcome extends React.Component {
  render(){
    
    return(
      <KeyboardAvoidingView style = { styles.container } behaviour={'padding'} enabled>
      <View style = { styles.header }>
        <Image 
        source = {require('../icons/socialweb.png')}
        style = { styles.icon_p } />
        <Text style ={ styles.icon_t }>Welcome to SocialWeb</Text>
        </View>
      <Newaccount />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ed6df',
  },
  header: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
  },  
  icon_p: {
    alignItems: 'center',
    width: 150,
    height: 150,
  },
  icon_t: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});