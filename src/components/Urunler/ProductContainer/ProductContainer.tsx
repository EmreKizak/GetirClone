import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import productsGetir from '../../../../assets/productsGetir';
import ProductItem from '../ProductItem';
const ProductContainer = () => {
  return (
    <View>
      <View style={styles.twoProduct}>
        {productsGetir.slice(0, 2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={styles.below_products}>Çubuk</Text>
      <View style={styles.below_container}>
        {productsGetir.slice(2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;
