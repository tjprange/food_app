import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        // hide scroll bar
        showsHorizontalScrollIndicator={false}
        data={results}
        // use the id field as the key
        keyExtractor={(result) => result.id}
        // item is each item from the data={results}
        renderItem={({ item }) => {
          // pass the item as props to result
          return (
            <TouchableOpacity
              // pass item.id to ResultsShowScreen
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

// give ResultsList access to navigation w/ out passing from parent component
export default withNavigation(ResultsList);
