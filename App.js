import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import NewWelcome from './screens/NewWelcome';
import Welcome from './screens/Welcome';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from 'react-navigation';


export default class MyApp extends React.Component {
  render(){
    const MainNaviator = createBottomTabNavigator({
      User: { screen: Profile },
      Login: {
        screen: Welcome,
        navigationOptions: () => ({
          title: 'Login',
          tabBarIcon: <Image
            source={require('./icons/login.png')}
            style={ styles.tab_icon_login}
            />  
      })
      },
      NewUser: {
        screen: NewWelcome,
        navigationOptions: () => ({
          title: 'New User',
          tabBarIcon: <Image
            source={require('./icons/newuser.png')}
            style={ styles.tab_icon_user}
           /> 
      })
      }
    });
    return(
      <View style = { styles.container }>
        <MainNaviator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ed6df',
  },
  tab_icon_login: {
    height: 25,
    width: 25,
    tintColor: 'black',
    opacity: 0.5,
  },
  tab_icon_user: {
    height: 35,
    width: 35,
    tintColor: 'black',
    opacity: 0.5,
  },
});