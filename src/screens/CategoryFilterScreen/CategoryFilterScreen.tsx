import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CategoryFiltering from '../../components/UrunlerHeader/CategoryFiltering';
import {Category} from '../../models';
import TypeFiltering from '../../components/UrunlerHeader/TypeFiltering';
import ProductContainer from '../../components/Urunler/ProductContainer';

const CategoryFilterScreen = props => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category,
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
};

export default CategoryFilterScreen;

const styles = StyleSheet.create({});
