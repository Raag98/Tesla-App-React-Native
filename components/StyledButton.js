import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 20, 
  },
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default StyledButton = (props) => {

    const backgroundColor = (props.type === 'primary') ? '#171a20cc' : '#ffffffa6';
    const textColor = (props.type === 'primary') ? '#ffffff' : '#171a20cc';
    const {onPress}=props;
    return (
        <View style={styles.container}>
        <Pressable 
            style={[styles.button, {backgroundColor: backgroundColor}]} 
            onPress={onPress}
            >
            <Text style={[styles.text, {color: textColor}]}>{props.content}</Text>
        </Pressable>
        </View>
    );
}