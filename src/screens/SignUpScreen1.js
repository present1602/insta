import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PrimaryInputForm from '../components/PrimaryInputForm';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../config/Colors';
import PhoneInputForm from '../components/PhoneInputForm'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen1 = () => {
  const navigation = useNavigation();

  const [isPhoneEnabled, setPhoneEnabled] = useState(true)

  function onPressNext(){
    navigation.navigate('SignUpScreen2')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require('../assets/images/avatar.jpg')} />
        </View>
        <View style={styles.switchTitleWrapper}>
          <TouchableOpacity
            onPress={() => setPhoneEnabled(true)}
            style={styles.titleSwitch}>

            <Text style={styles.title}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleSwitch}
            onPress={() => setPhoneEnabled(false)}>
            <Text style={styles.title}>Email</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.notificationWRapper}>
          <Text style={styles.notificationText}>
            핸드폰번호를 입력해주세요
          </Text>
        </View>

        <View style={styles.phoneNumberInputWrapper}>
          <PhoneInputForm />
        </View>


        <View style={styles.buttonWrapper}>
          <PrimaryButton 
            buttonLabel={'Next'} 
            textColor={colors.secondary} 
            buttonBgColor={colors.primary} 
            onPressBtn={onPressNext}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.login}>
          <Text style={styles.alreradyAccount}>Already have an account?</Text>
          <Text style={styles.logIn}>LogIn.</Text>
        </Text>
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
    padding: 10,
    // paddingTop: 10
  },
  notificationText: {
    color: colors.gray,
    textAlign: 'center'
  },
  buttonWrapper: {
    marginLeft: 15,
    marginRight: 15
  },
  topContainer: {
    display: 'flex',
    flex: 1
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15
  },
  login: {
    textAlign: 'center'
  },
  alreradyAccount: {
    color: colors.gray
  },
  logIn: {
    fontWeight: '700'
  }
})