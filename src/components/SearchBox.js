import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/colors';


const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Icon name='search' size={22} color={colors.gray} />
    </View>
  );
}

export default SearchBox;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
})