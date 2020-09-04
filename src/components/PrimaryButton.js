import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../config/colors';

const PrimaryButton = ({ buttonLabel, buttonBgColor, textColor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor: buttonBgColor}]}>
        <Text style={[styles.text, {color: textColor} ]}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PrimaryButton;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.primary,
    textAlign: 'center',
    padding: 15,
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
}) 