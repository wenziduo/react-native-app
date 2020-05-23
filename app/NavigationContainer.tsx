/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeComponent from './pages/Main/Home';
import OrderComponent from './pages/Main/Order';
import NewsComponent from './pages/Main/News';
import DetailComponent from './pages/Detail';
import MyComponent from './pages/Main/My';
import ComponentOuter from './ComponentOuter';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const RootComponent = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: 'tomato',
      }}>
      <TabBottom.Screen
        name="Home"
        component={ComponentOuter(HomeComponent)}
        options={{
          title: '主页',
          tabBarLabel: '主页',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <TabBottom.Screen
        name="Order"
        component={ComponentOuter(OrderComponent)}
        options={{
          tabBarLabel: '订单',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TabBottom.Screen
        name="News"
        component={ComponentOuter(NewsComponent)}
        options={{
          tabBarLabel: '消息',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="chat-processing"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TabBottom.Screen
        name="My"
        component={ComponentOuter(MyComponent)}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </TabBottom.Navigator>
  );
};

class NavigationContainerComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Root"
            headerMode="screen"
            screenOptions={{
              headerTintColor: '#333',
              headerStyle: {backgroundColor: '#fff'},
            }}>
            <Stack.Screen
              name="Root"
              component={RootComponent}
              options={{
                headerShown: false,
                title: '首屏',
              }}
            />
            <Stack.Screen
              name="Detail"
              component={ComponentOuter(DetailComponent)}
              options={{
                title: '详情页',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </React.Fragment>
    );
  }
}

export default NavigationContainerComponent;
