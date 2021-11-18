import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {dolphin} from '../../constants/colors';
import Flex from '../Layout/Flex';
import {styles} from './styles';

interface DailyReadProps {
  type: string;
  duration: string;
  text: string;
}

const DailyRead = ({type, duration, text}: DailyReadProps) => {
  return (
    <View style={styles.container}>
      <Flex>
        <Text>{type}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </Flex>
      <Text style={{fontSize: 16, marginTop: 6}}>{text}</Text>
    </View>
  );
};

export default DailyRead;
