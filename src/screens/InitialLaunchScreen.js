import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/colors';
import PrimaryButton from '../components/PrimaryButton';
import SearchBox from '../components/SearchBox';


const DATA = [
  { id: 1, title: 'language', subTitle: 'subtitle1' },
  { id: 2, title: 'language2', subTitle: 'subtitle2' },
  { id: 3, title: 'language3', subTitle: 'subtitle3' },
  { id: 4, title: 'language4', subTitle: 'subtitle4' },
]

const InitialLaunchScreen = () => {
  const [languageModalVisible, setLanguageModalVisible] = useState(false)

  const handleClick = () => {
    setLanguageModalVisible(!languageModalVisible)
  }
  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <TouchableOpacity onPress={() => handleClick()}>
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
        languageModalVisible ? { backgroundColor: 'rgba(0,0,0,0.5)' } : null
        ]}>
          <View style={styles.modalContentContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Select your language</Text>
            </View>
            <View style={styles.underLine}></View>
            <View style={styles.searchBoxWrapper}>
              <SearchBox />
            </View>
            <View style={styles.underLine}></View>
            <FlatList
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({ item }) => 
                <View style={styles.languageWrapper}>
                  <Text style={styles.langTitle}>{item.title}</Text>
                  <Text style={styles.subLanguage}>{item.subTitle}</Text>
                </View>
              }
            />

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
  languageContainer: {
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
    display: 'flex',
    marginBottom: 20
  },
  languageWrapper: {
    marginLeft: 15,
    marginBottom: 10
  },
  subLanguage:{
    color:colors.gray,
    fontSize:16
  },
  langTitle: {
    fontSize: 20
  },
  ButtonItemContainer: {
      marginBottom: 10,
      width: '100%'
  }

})