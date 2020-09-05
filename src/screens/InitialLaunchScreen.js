import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/colors';
import PrimaryButton from '../components/PrimaryButton';
import SearchBox from '../components/SearchBox';


const InitialLaunchScreen = () => {
  const [languageModalVisible, setLanguageModalVisible] = useState(false)

  const handleClick = () => {
    setLanguageModalVisible(!languageModalVisible)
  }
  return (
    <View style={styles.container}>
      <View style={styles.languageWapper}>
        <TouchableOpacity onPress={() => handleClick() }>
          <Text>
            <Text>English (United States)</Text>
            <Icon name="angle-down" size={30} color={colors.gray} />
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
    
      <Modal visible={languageModalVisible}
        transparent={true}
      >
        <View style={[styles.modalContainer, 
                      languageModalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : null
                      ]}>  
          <View style={styles.modalContentContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Select your language</Text>
            </View>
            <View style={styles.underLine}></View>
            <View style={styles.searchBoxWrapper}>
              <SearchBox/>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleClick()}>
          <Text>Close Modal</Text>
        </TouchableOpacity>
      </Modal>
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
    height: '25%',
    marginBottom: 50
  },
  footerContentWrapper: {
    borderTopColor: colors.gray,
    borderTopWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  from: {
    color: colors.gray
  },
  facebook: {
    fontWeight: 'bold'
  },
  modalContainer: {
    display: 'flex',
    flex: 1
  },
  modalContentContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.secondary,
    marginRight: '10%',
    marginLeft: '10%'
  },
  titleWrapper: {
    padding: 10
  },
  title: {
    fontWeight: '700',
    fontSize: 18
  },
  underLine: {
    height: 1.5,
    backgroundColor: colors.gray1
  },
  searchBoxWrapper: {

  }

})