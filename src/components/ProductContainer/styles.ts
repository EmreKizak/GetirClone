import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  twoProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  below_products: {
    color: 'gray',
    fontWeight: 'bold',
    padding: 14,
  },
  below_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default styles;
