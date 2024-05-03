import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
type DetailBoxPropss = {
  price: number;
  name: string;
  quantity: string;
};
const DetailBox = ({price, name, quantity}: DetailBoxPropss) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        {'\u20BA'}
        {price}
      </Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
};

export default DetailBox;
