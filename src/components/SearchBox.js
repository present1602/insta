import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/Colors';


const SearchBox = () => {
  const [searchText, setSearchText] = useState('') 

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon 
          style={styles.icon}
          name='search' size={22} color={colors.gray} />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput stlye={styles.inputBox} 
          placeholder='Search'
          onChangeText= { (text) => setSearchText(text) }
        />
      </View>
    </View>
  );
}

export default SearchBox;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  iconWrapper: {
    display: 'flex',
    flex: 1
  },
  inputWrapper: {
    display: 'flex',
    flex: 7
  },
  inputBox: {
    height: 40
  },
  icon: {
    padding: 5
  }
})