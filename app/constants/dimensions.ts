import {Dimensions, useWindowDimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const screenHeight = (num: number) => {
  return (num / 100) * height;
};

export const screenWidth = (num: number) => {
  return (num / 100) * width;
};

export const useDimensions = () => ({ width, height })
