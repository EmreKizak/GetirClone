import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import categoriesGetir from '../../../assets/categoriesGetir';
import CategoryItem from '../Anasayfa/CategoryItem';
import {Category} from '../../models';
const MainCategorie = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default MainCategorie;
