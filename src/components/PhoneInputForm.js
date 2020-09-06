import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/Colors';

const PhoneInputForm = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.countryWrapper}>
        <Text>KR +82</Text>
      </View>
      <View style={styles.inputNumber}>
        <TextInput value={'0000'} />
      </View>
      <View style={styles.closeBtnWrapper}>
        {/* <Icon color={colors.gray} name={times} /> */}
        <Icon size={25} style={styles.icon} color={colors.gray} name={'times'} />

      </View>
    </View>
  );
};

export default PhoneInputForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row'
  },
  countryWrapper: {
    display: "flex",
    flex: 1
  },
  inputNumber: {
    display: "flex",
    flex: 1
  },
  closeBtnWrapper: {
    display: "flex",
    flex: 1
  },
  icon: {
    textAlign: 'right'
  }
})
