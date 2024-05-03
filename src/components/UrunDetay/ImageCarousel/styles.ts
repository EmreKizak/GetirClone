import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    height: height * 0.25,
    paddingTop: 25,
  },
  flat: {
    width: width * 0.5,

    height: height * 0.21,
  },
  image: {
    width: width * 0.5,
    height: height * 0.21,
  },
  dot_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 30,
    height: 12,
    justifyContent: 'space-around',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 10,
  },
});

export default styles;
