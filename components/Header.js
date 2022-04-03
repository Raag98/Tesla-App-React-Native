import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 135,
    height: 40,
    resizeMode: 'contain',
  },
  menu: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/logo.png')} />
      <Image style={styles.menu} source={require('../assets/images/menu.png')} />
    </View>
  );
}