import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    backgroundColor: 'white',
    height: height * 0.072,
    flexDirection: 'row',
    paddingVertical: height * 0.014,
    paddingHorizontal: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
});

export default styles;
