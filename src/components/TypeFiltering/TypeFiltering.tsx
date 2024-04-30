import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
const {height} = Dimensions.get('window');

// Birlikte iyi giderim etrafına oluşturulan kutu
const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 10,
          flexDirection: 'row',
          alignItems: 'center',
        },
        item == active
          ? {backgroundColor: '#5C3EBC'}
          : {borderColor: '#f0eff7', borderWidth: 1},
      ]}>
      <Text
        style={[
          {
            fontSize: 12,
            color: '#7849F7',
            fontWeight: '600',
          },
          item == active && {color: 'white'},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

// Ürünler sayfasındaki ddondurmanın altı çizili olduğu alan
const TypeFiltering = () => {
  const [category, setCategory] = useState<String>('Birlikte İyi Gider');
  return (
    <ScrollView
      style={styles.scroll}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>
      {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        item => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        ),
      )}
    </ScrollView>
  );
};

export default TypeFiltering;
