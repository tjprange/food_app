import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// This will return the name, image_url, rating and review count
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text>
        {result.rating} Stars, {result.review_count} Reviews{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultsDetail;
