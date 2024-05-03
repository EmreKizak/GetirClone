import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Category} from '../../../models';
import {useNavigation} from '@react-navigation/native';

type CategoryItemProps = {
  item: Category;
};
const CategoryItem = ({item}: CategoryItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CategoryDetails', {category: item})}>
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
