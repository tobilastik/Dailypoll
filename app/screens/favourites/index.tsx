import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from './styles';

interface FavouritesProps {}

const Favourites = (props: FavouritesProps) => {
  return (
    <View style={styles.container}>
      <Text>Favourites</Text>
    </View>
  );
};

export default Favourites;
