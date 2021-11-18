import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  Modal,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import {useDimensions} from '../../constants/dimensions';
import {white} from '../../constants/colors';

const {height} = useDimensions();

const DURATION = 400;
const TRANSLATE_VAL = height + 50;

interface MyRef {
  toggle: any;
}

type SlimodalProps = {
  closeCallback: any;
  fullHeight: boolean;
  abortCallback: () => void;
};

const SlideModal = forwardRef<MyRef, SlimodalProps>(
  ({children, closeCallback, fullHeight, abortCallback}, ref) => {
    const maskAnimation = useRef(new Animated.Value(0)).current;
    const modalAnimation = useRef(new Animated.Value(0)).current;

    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const normalHeight = {maxHeight: height * 0.9};
    const windowHeight = {height};

    useImperativeHandle(ref, () => ({toggle}));

    useLayoutEffect(() => {
      animate();

      setTimeout(
        () => {
          setModalVisible(visible);
        },
        !visible ? DURATION : 0,
      );
    }, [visible]);

    const animate = () => {
      Animated.parallel([
        Animated.timing(modalAnimation, {
          toValue: visible ? 0 : TRANSLATE_VAL,
          easing: Easing.inOut(Easing.exp),
          duration: DURATION,
          useNativeDriver: Platform.OS === 'android',
        }),
        Animated.timing(maskAnimation, {
          toValue: visible ? 1 : 0,
          duration: DURATION,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: Platform.OS === 'android',
        }),
      ]).start();
    };

    const requestClose = () => {
      if (closeCallback && typeof closeCallback === 'function') closeCallback();
      toggle(true);
    };

    const toggle = (abort: any) => {
      Keyboard.dismiss();
      setVisible(!visible);

      if (
        visible &&
        abort &&
        abortCallback &&
        typeof abortCallback === 'function'
      ) {
        console.log('Aborted');
        setTimeout(() => {
          abortCallback();
        }, 400);
      }
    };

    return (
      <Modal visible={modalVisible} transparent onRequestClose={requestClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={requestClose}>
            <Animated.View
              style={[styles.mask, {opacity: maskAnimation}]}></Animated.View>
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.modal,
              fullHeight ? windowHeight : normalHeight,
              {
                backgroundColor: white,
                transform: [{translateY: modalAnimation}],
              },
            ]}>
            <SafeAreaView style={{flexShrink: 1, flex: 1, marginTop: 100}}>
              {children}
            </SafeAreaView>
          </Animated.View>
        </View>
      </Modal>
    );
  },
);

export default SlideModal;
