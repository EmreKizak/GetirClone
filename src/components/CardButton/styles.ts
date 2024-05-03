import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.1,
    backgroundColor: 'white',
    marginTop: 5,
  },
  buton_container: {
    height: height * 0.06,
    width: '90%',
    backgroundColor: '#5D39C1',
    marginHorizontal: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
