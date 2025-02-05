import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/Colors';
import Feed from '../components/Feed';

const FeedScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.icon} source={require('../assets/images/camera.jpg')} />
        <Image style={styles.logo} source={require('../assets/images/instagramLogo.png')} />
        <View style={styles.headerRightWrapper}>
          <Image style={styles.icon} source={require('../assets/images/igtv.png')} />
          <Image style={styles.icon} source={require('../assets/images/message.jpg')} />
        </View>
      </View>

      <ScrollView style={styles.feedContainer}>
        <Feed />
      </ScrollView>

      <View style={styles.footer}>
        <Icon color={colors.black} size={25} name="home" />
        <Icon color={colors.gray} size={25} name="search" />
        <Icon color={colors.gray} size={25} name="plus-square" />
        <Icon color={colors.gray} size={25} name="heart" />
      </View>

    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    borderBottomColor:colors.gray1,
    borderBottomWidth:1
  },
  feedContainer: {
    display: 'flex',
  },
  icon: {
    width: 40,
    height: 40
  },
  logo: {
    width: 150,
    height: '100%'
  },
  headerRightWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',    
    justifyContent: 'space-between',
    bottom: 30,
    padding:10,
    borderTopColor:colors.gray1,
    borderTopWidth:1
  }
})
