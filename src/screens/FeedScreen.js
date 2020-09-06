import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image style={styles.icon} source={require('../assets/images/camera.jpg')} />
        <Image style={styles.logo} source={require('../assets/images/instagramLogo.png')} />
        <View>
          <Image style={styles.icon} source={require('../assets/images/igtv.png')} />
          <Image style={styles.icon} source={require('../assets/images/message.jpg')} />
        </View>
      </View>

      <ScrollView style={styles.feedContainer}>

      </ScrollView>

      <View style={styles.footer}>
        <Text>footer</Text>
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
    position: 'absolute',
    bottom: 30
  }
})
