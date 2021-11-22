import React, {
  forwardRef,
  ReactChild,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import {useDimensions} from '../../constants/dimensions';

const {height} = useDimensions();

const DURATION = 400;

type SlimodalProps = {
  requestClose: () => void;
  children: ReactChild;
  modalVisible: boolean;
};

const SlideModal = ({children, requestClose, modalVisible}: SlimodalProps) => {
  return (
    <Modal visible={modalVisible} transparent onRequestClose={requestClose}>
      <View style={styles.container}>
        <SafeAreaView style={{flexShrink: 1, flex: 1, marginTop: 10}}>
          {children}
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default SlideModal;
