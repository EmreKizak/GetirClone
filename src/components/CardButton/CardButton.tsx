import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
const CardButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.buton_container}>
        <Text style={styles.title}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;
