import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStory from './screens/readStory.js';
import WriteStory from './screens/writeStory.js';

export default class App extends React.Component {
  render(){
    return (
      
        
        <AppContainer />
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  WriteStory:WriteStory,
  ReadStory:ReadStory
},{
  defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName=navigation.state.routeName
    if(routeName=='ReadStory'){
      return(
        <Image
        style={{width:40,height:40}}
        source={require('./assets/read.png')}></Image>
      )
    }
    else if(routeName=='WriteStory'){
      return(
        <Image
        style={{width:40,height:40}}
        source={require('./assets/write.png')}
        ></Image>
      )
    }
  }
  })
})

const AppContainer = createAppContainer(TabNavigator)
