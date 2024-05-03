import {Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DetailProperty = () => {
  const [details, setDetails] = useState<string[]>([
    'Sütlü kıtır çikolata ve badem parçaçıklarıyla kaplı vanilya lezzeti',
    'İçindekiler',
    'Besin Değerleri',
    'Kullanım',
    'Ek Bilgiler',
  ]);
  const TextComponent = ({detail, index}: {detail: string; index: number}) => {
    return (
      <View
        style={[
          styles.textComponent_container,
          {borderBottomWidth: index === details.length - 1 ? 0 : 0.5},
        ]}>
        <Text
          style={[
            {fontSize: index === 0 ? 11 : 13},
            {fontWeight: index === 0 ? '400' : '500'},
            {color: index === 0 ? '#424242' : '#687482'},
          ]}>
          {detail}
        </Text>
        {index != 0 && <Icon name="chevron-down" size={24} color="687482" />}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
};

export default DetailProperty;
