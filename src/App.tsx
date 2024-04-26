import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
  },
});
