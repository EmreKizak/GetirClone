import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Product} from '../../models';
import ImageCarousel from '../../components/UrunDetay/ImageCarousel';
import DetailBox from '../../components/UrunDetay/DetailBox';
import styles from './styles';
import DetailProperty from '../../components/UrunDetay/DetailProperty';
import CardButton from '../../components/CardButton';
const ProductDetails = props => {
  const [product, setproduct] = useState<Product>();
  useEffect(() => {
    setproduct(props.route.params.product);
  }, []);
  if (!product) {
    return <ActivityIndicator color={'#5D3EBD'} />;
  }
  return (
    <View>
      <ScrollView>
        <ImageCarousel images={product?.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text style={styles.detaylar}>Detaylar</Text>
        <DetailProperty />
      </ScrollView>
      <CardButton />
    </View>
  );
};

export default ProductDetails;
