import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/colors';
import PrimaryButton from '../components/PrimaryButton';


const InitialLaunchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.languageWapper}>
        <TouchableOpacity>
          <Text>
            <Text>English (United States)</Text>
            <Icon name="angle-down" size={30} color={colors.gray1} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWapper}>
        <Image 
          style={styles.instaLogo}
          source={require('../assets/images/instagramLogo.png')} 
        />
        <PrimaryButton 
          buttonLabel={"create Account"} 
          buttonBgColor={colors.primary}
          textColor={colors.secondary}
        />
        <PrimaryButton 
          buttonLabel={"Login"} 
          buttonBgColor={colors.secondary} 
          textColor={colors.primary}
        />
      </View>
      <View style={styles.footerWapper}>
        <View style={styles.footerContentWrapper}>
          <Text style={styles.from}>from</Text>
          <Text style={styles.facebook}>facebook</Text>
        </View>
      </View>
    </View>
  );
}

export default InitialLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,

  },
  languageWapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonWapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerWapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  instaLogo: {
    width: '50%',
    height: '25%'
  },
  footerContentWrapper: {
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
    width:'100%',
    alignItems: 'center',
  },
  from: {
    color: colors.gray1
  },
  facebook: {
    fontWeight: 'bold'
  }

})