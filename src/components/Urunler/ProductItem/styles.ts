import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  opacity: {
    width: width * 0.28,
    height: height * 0.25,
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 6,
  },
  image: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 12,
    borderWidth: 0.1,
    borderColor: 'gray',
  },
  text_container: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  indirilim_fiyat: {
    fontSize: 11,
    color: '#747990',
    textDecorationLine: 'line-through', //üstünü çiziyor
  },
  fiyat: {
    color: '#5D3EBD',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 12,
  },
  product_name: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  kilo: {
    color: '#747990',
    marginTop: 4,
    fontWeight: '500',
  },
  cart: {
    alignItems: 'center',
    shadowRadius: 3.8,
    shadowOpacity: 0.7,
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderWidth: 0.3,
    borderColor: '#747990',
    backgroundColor: 'white',
    position: 'absolute',
    right: -6,
    top: -6,
    borderRadius: 6,
  },
});

export default styles;
