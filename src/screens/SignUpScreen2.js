import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PrimaryInputForm from '../components/PrimaryInputForm';
import PrimaryButton from '../components/PrimaryButton';


const SignUpScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text>head</Text>
      </View>
      <View style={styles.subHeadingContainer}>
        <Text>subhead</Text>
      </View>
      <View style={styles.inputContainer}>
        <PrimaryInputForm />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton />
      </View>
    </View>

  );
}

export default SignUpScreen2;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  headingContainer: {

  },
  subHeadingContainer: {

  },
  inputContainer: {

  },
  buttonContainer: {

  }
})