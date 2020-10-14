import * as React from 'react';

import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { createStackNavigator } from '@react-navigation/stack';





function HomeScreen() {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home Screen</Text>

    </View>

  );

}

function DetailsScreen() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Details Screen</Text>

      </View>

    );

  }



//const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();



export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Details" component={DetailsScreen} />

      </Tab.Navigator>

    </NavigationContainer>

  );

}