import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Todo from './screens/Todo'
const Tab = createBottomTabNavigator();
import {ModalPortal} from 'react-native-modals'
import Profile from './screens/Profile'

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ToDo" component={Todo} options={{
          tabBarLabel:'ToDo',
          tabBarLabelStyle:{color:'black', fontSize:12},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?
          (<Icon name="tasks" size={24} color="purple"/>):
          (<Icon name="tasks" size={24} color="blue"/>)
          }}/>

        <Tab.Screen name='Profile' component={Profile} 
        options={{
          
          tabBarLabel:'Profile',
          tabBarLabelStyle:{color:'black', fontSize:12},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?
          (<Icon name="tasks" size={24} color="purple"/>):
          (<Icon name="tasks" size={24} color="blue"/>)
          }}/>
      </Tab.Navigator>
      
    </NavigationContainer>
    <ModalPortal/>
    
    </>
    
    
  )
}

export default App

const styles = StyleSheet.create({

})