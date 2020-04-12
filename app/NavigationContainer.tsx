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
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const MyTabs = () => {
  const Feed = () => {
    return (
      <ScrollView>
        <Text>Feed</Text>
      </ScrollView>
    );
  };
  const Notifications = () => {
    return (
      <ScrollView>
        <Text>Notifications</Text>
      </ScrollView>
    );
  };
  const Profile = () => {
    return (
      <ScrollView>
        <Text>Profile</Text>
      </ScrollView>
    );
  };
  return (
    <TabTop.Navigator
      initialRouteName="Feed"
      TopBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'powderblue'},
      }}>
      <TabTop.Screen
        name="Feed"
        component={Feed}
        options={{tabBarLabel: 'Feed'}}
      />
      <TabTop.Screen
        name="Notifications"
        component={Notifications}
        options={{tabBarLabel: 'Notifications'}}
      />
      <TabTop.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </TabTop.Navigator>
  );
};

const RootComponent = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="home"
      activeTintColor="green"
      barStyle={{backgroundColor: '#f9f9f9'}}
      tabBarOptions={{
        activeTintColor: 'tomato',
      }}>
      <TabBottom.Screen
        name="Home"
        component={HomeComponent}
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
        component={OrderComponent}
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
        component={NewsComponent}
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
        component={MyComponent}
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

const NavigationContainerComponent: () => React$Node = () => {
  return (
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
          headerMode={null}
          options={{
            headerShown: false,
            title: '首屏',
            headerMode: 'none',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailComponent}
          options={{
            title: '详情页',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerComponent;
