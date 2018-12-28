import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class Profile extends Component{
    render(){
        return(
            <View style={ styles.container }>
            <View style={ styles.header }>
                <TextInput 
                    style={ styles.search }
                    placeholder='Search...'
                    returnKeyType='go'
                />
            </View>
            <View style={ styles.images }>
                <TouchableOpacity style={ styles.cover }>
                    <Image source={require('../Images/social1.jpg')} style={ styles.cover_img } />
                </TouchableOpacity>
                <TouchableOpacity style={ styles.profile }>
                    <Image source={require('../Images/social2.jpg')} style={ styles.profile_img } />
                </TouchableOpacity>
            </View>
            <View style={styles.user_name}>
                <Text style={ styles.user_name_txt}>Peter Pan</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#7ed6df',
        textAlign: 'center',
        justifyContent: 'center',
        height: 90,
    },
    search: {
        marginTop: 10,
        backgroundColor: 'white',
        margin: 10,
        paddingLeft: 10,
        height: 30,
        borderRadius: 15,
    },
    images: {
        alignItems: 'center',
    },
    cover: {
        borderBottomWidth: 0,
        backgroundColor: 'white',
        height: 200,
    },
    cover_img: {
        height: 200,
        width: 380,
    },
    profile: {
        marginTop: -60,
        borderRadius: 75,
        borderWidth: 6,
        borderColor: 'white',
        backgroundColor: 'white',
        height: 150,
        width: 150,
        alignItems: 'center',
    },
    profile_img: {
        borderRadius: 69,
        height: 138,
        width: 138,
    },
    user_name: {
        alignItems: 'center'
    },
    user_name_txt: {
        fontSize: 20,
        fontWeight: 'bold',

    },
})