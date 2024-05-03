import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import categoriesGetir from '../../../../assets/categoriesGetir';
import {Category} from '../../../models';

const CategoryBox = ({item, active}: {item: Category; active: Category}) => {
  return (
    <View
      style={[
        styles.categoryContainer,
        item.name == active.name && {
          borderBottomColor: '#FFD00C',
          borderBottomWidth: 3,
        },
      ]}>
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );
};

const CategoryFiltering = ({category}: {category: Category}) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      style={styles.scroll}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>
      {categories.map(item => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;
