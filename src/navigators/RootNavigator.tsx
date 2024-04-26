import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './HomeNavigator';
const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  const CustomTabBarButton = ({children}) => {
    return (
      <TouchableOpacity
        style={{
          width: 58,
          height: 58,
          backgroundColor: '#5C3EBC',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 33,
          marginTop: -8,
          borderWidth: 3,
          borderColor: 'white',
        }}>
        <Icon name="view-headline" size={32} color="#FFD00C" />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC', //mor
        tabBarInactiveTintColor: '#959595', //gri
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Group>
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="search-web" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="list"
          component={HomeNavigator}
          options={{tabBarButton: props => <CustomTabBarButton {...props} />}}
        />
        <Tab.Screen
          name="User"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Gift"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="gift" size={24} color={color} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
