import {Dimensions, Image, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.25,
    height: width * 0.25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: width * 0.18,
    height: height * 0.1,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '500',
  },
});

export default styles;
