import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {dolphin} from '../../constants/colors';

interface PollProps {
  text: string;
}

const Poll = ({text}: PollProps) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>{text}</Text>
    </View>
  );
};

export default Poll;

const styles = StyleSheet.create({
  container: {
    backgroundColor: dolphin,
    marginVertical: 6,
    padding: 12,
    borderRadius: 18,
  },
});
