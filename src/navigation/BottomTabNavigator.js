import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import NativeAdScreen from '../screens/NativeAd';
import {theme} from '../theme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.palette.black},
        tabBarActiveTintColor: theme.palette.primary,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({color}) => <Text style={{color}}>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Ad"
        component={NativeAdScreen}
        options={{
          tabBarLabel: ({color}) => <Text style={{color}}>Native Ad</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
