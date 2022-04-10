import React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CarsList /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
  },
});

export default App;
