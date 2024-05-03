import {ScrollView} from 'react-native';
import React from 'react';
import HeaderMain from '../../components/Anasayfa/HeaderMain';
import BannerCarousel from '../../components/Anasayfa/BannerCarousel';
import MainCategories from '../../components/MainCategories';
const HomeScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: '#f5f5f5'}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default HomeScreen;
