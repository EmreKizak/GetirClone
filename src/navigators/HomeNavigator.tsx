import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{width: 70, height: 30}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              Ürünler
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 8}}
              onPress={() => navigation.goBack()}>
              <Icon name="window-close" size={24} color="white"></Icon>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              Ürün Detayı
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
