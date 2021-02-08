import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  // extract logic into useResults
  const [searchApi, results, errorMessage] = useResults();
  //console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // A view can fit beyond the size of the screen, flex 1 +
    // the scroll view will make it adjustable
    // <View style={{ flex: 1 }}>
    // placeholder element does not need flex property
    <>
      {/* Passing state variable and function to modify it to SearchBar */}
      <SearchBar
        term={term}
        // newTerm is the input value from user
        onTermChange={(newTerm) => setTerm(newTerm)} // could also write onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} // could also write onTermSubmit{searchApi}
      />
      {/* if error message, render error otherwise nothing */}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterResultsByPrice('$')}
        />
        <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
        <ResultsList
          title='Big Spender'
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
