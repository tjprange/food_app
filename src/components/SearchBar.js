import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
//https://github.com/expo/vector-icons docs for icons
import { Feather } from '@expo/vector-icons';

// recv term variable and setTerm function as props
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        // turn off auto caps and auto correct
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        style={styles.inputStyle}
        // state variable from SearchScreen
        value={term}
        // this is the state function from SearchScreen
        // when text is entered, it will update state
        // to the value of the text entered
        onChangeText={(newTerm) => onTermChange(newTerm)} // could also be written as onChangeText={onChangeTerm}
        // this is where the API request will take place
        onEndEditing={() => onTermSubmit()} // could also be written as onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    // allow TextInput and Feather icon to show up on same line
    flexDirection: 'row',
  },
  inputStyle: {
    // use as much space in the flex direction as possible
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    // how to control icon size inside of styles
    fontSize: 35,
    // center the icon within the backgroundStyle
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
