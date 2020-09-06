import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PrimaryInputForm from '../components/PrimaryInputForm';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../config/Colors';
import PhoneInputForm from '../components/PhoneInputForm'

const SignUpScreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/avatar.jpg')} />
      </View>
      <View style={styles.switchTitleWrapper}>
        <TouchableOpacity style={styles.titleSwitch}>
          <Text style={styles.title}>Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleSwitch}>
          <Text style={styles.title}>Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.phoneNumberInputWrapper}>
        <PhoneInputForm />
      </View>

      <View style={styles.notificationWRapper}>
        <Text style={styles.notificationText}>You may recieve SMS updates from instagram and can opt out at any time.</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <PrimaryButton buttonLabel={'Next'} textColor={colors.secondary} buttonBgColor={colors.primary} />
      </View>
    </View>

  );

}

export default SignUpScreen1;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  avatar: {
    width: 200,
    height: 200
  },
  switchTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 30,
    marginTop: 30
  },
  titleSwitch: {
    display: 'flex',
    flex: 1,
    borderBottomColor: colors.black,
    borderBottomWidth: 1
  },
  title: {
    textAlign: 'center',
    padding: 15
  },
  phoneNumberInputWrapper: {
    display: "flex",
    margin: 30
  },
  notificationWRapper: {
    padding: 30,
    paddingTop: 10
  },
  notificationText: {
    color: colors.gray,
    textAlign: 'center'
  },
  buttonWrapper:{
    marginLeft:15,
    marginRight:15
  },

})