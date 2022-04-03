import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import StyledButton from './StyledButton'

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get("window").height,
  },
  carImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    marginTop: '35%',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  extra: {
    textDecorationLine: 'underline',
  },
});

export default CarItem = (props) => {

    const {title, subtitle, extra, image} = props.car;

    return (
      <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.carImage} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {subtitle} <Text style={styles.extra}>{extra}</Text>
          </Text>
        </View>
        
        <View style={{position: 'absolute', width: '100%', bottom: 50}}>
          <StyledButton
            type="primary"
            content={'Custom Order'}
            onPress={() => {
              console.warn('Custom Order');
            }}
          />
          <StyledButton
            type="secondary"
            content={'Existing Inventory'}
            onPress={() => {
              console.warn('Existing Inventory');
            }}
          />
        </View>
      </View>
    );
}