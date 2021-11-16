import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from './styles';

interface ExploreProps {}

const Explore = (props: ExploreProps) => {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
    </View>
  );
};

export default Explore;
