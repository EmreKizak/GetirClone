import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const HeaderMain = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
        />
        <View style={styles.headerOneView}>
          <Text style={styles.adresBaslıgı}>Ev</Text>
          <Text style={styles.adres}>
            Dedepaşa Bulv. Yenişehir Mahallesi...
          </Text>
          <Icon name="chevron-right" size={22} color="#5D3EBD" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.tvs}>TVS</Text>
          <Text style={styles.dakika}>
            13<Text style={{fontSize: 16}}>dk</Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default HeaderMain;
