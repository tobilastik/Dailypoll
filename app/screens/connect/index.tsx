import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from './styles';

interface ConnectProps {}

const Connect = (props: ConnectProps) => {
  return (
    <View style={styles.container}>
      <Text>Connect</Text>
    </View>
  );
};

export default Connect;
