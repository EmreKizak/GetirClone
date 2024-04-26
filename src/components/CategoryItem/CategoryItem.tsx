import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Category} from '../../models';

type CategoryItemProps = {
  item: Category;
};
const CategoryItem = ({item}: CategoryItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.src,
        }}
      />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
