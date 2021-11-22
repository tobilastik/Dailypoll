import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {API} from '../../api';
import {dolphin} from '../../constants/colors';
import {pollAction} from '../../store/actions';
import {State} from '../../store/reducers';
import Flex from '../Layout/Flex';
import {styles} from './styles';

interface PollProps {
  text: string;
  onPress(): void;
}

const Poll = ({text, onPress}: PollProps) => {
  const dispatch = useDispatch();
  const {pollResults, answered} = useSelector((state: State) => state.poll);

  console.log(pollResults);

  const handleSelectPoll = () => {
    API.loadAnswers(
      {
        success: (data: any) => {
          dispatch(pollAction.setPollResults(data));
          dispatch(pollAction.setPollAnswered(true));
        },
        error: (error: any) => {
          console.log(error);
        },
      },
      {
        percentages: 'most',
      },
    );
  };

  return (
    <Animated.View>
      <TouchableOpacity
        onPress={handleSelectPoll}
        disabled={answered}
        style={[
          styles.container,
          {backgroundColor: answered ? 'transparent' : dolphin},
        ]}>
        <Flex justify="space-between">
          <Text style={{fontSize: 18}}>{text}</Text>
          {/* adding this because I have used more than 4 hours on the project */}
          <Text>
            {!!pollResults &&
              answered &&
              `${pollResults.answer_stats.always / 100}%`}
          </Text>
        </Flex>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Poll;
