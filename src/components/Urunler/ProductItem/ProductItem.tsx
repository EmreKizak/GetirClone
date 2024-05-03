import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Product} from '../../../models';
import {useNavigation} from '@react-navigation/native';

type productItemType = {
  item: Product;
};

const ProductItem = ({item}: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.opacity}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.text_container}>
        <Text style={styles.indirilim_fiyat}>
          {'\u20BA'} {item.fiyatIndirimli}
        </Text>
        <Text style={styles.fiyat}>
          {'\u20BA'} {item.fiyat}
        </Text>
      </View>
      <Text style={styles.product_name}>{item.name}</Text>
      <Text style={styles.kilo}>{item.miktar}</Text>
      <View style={styles.cart}>
        <Icon name="plus" size={22} color="#5D3EBD" />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
