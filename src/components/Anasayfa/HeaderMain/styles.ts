import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: '#F7D102',
  },
  headerOne: {
    height: height * 0.064,
    width: '80%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 20,
    height: 20,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: '#F3F2FD',
    borderLeftWidth: 1,
  },
  adresBaslıgı: {
    fontWeight: '600',
    fontSize: 16,
  },
  adres: {
    fontWeight: '500',
    fontSize: 11,
    color: '6E7480',
    marginLeft: 6,
    marginRight: 2,
  },
  headerTwo: {
    height: height * 0.064,
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
  },
  tvs: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#5D3EBD',
  },
  dakika: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5D3EBD',
  },
});
export default styles;
