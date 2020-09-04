import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ColorPropType } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.logoContainer}>
        <Text>from</Text>
        <View style={styles.logoTextWrapper} >
          <Image
            style={styles.logo}
            source={require('../assets/images/facebookTextLogo.png')}
          />
        </View>
      </View>
    </View>
  );
}

export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 3
  },
  logoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    borderWidth: 3,
    alignItems: 'center',
    marginBottom: 30
  },
  logoTextWrapper: {
    width:'35%',
    height: 20,
    
  },
  icon: {
    width: 200,
    height: 200
  },
  logo: {
    flex:1,
    width: undefined
  },
})