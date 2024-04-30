import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    backgroundColor: '#7849F7',
    height: height * 0.065,
  },
  itemName: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  categoryContainer: {
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
