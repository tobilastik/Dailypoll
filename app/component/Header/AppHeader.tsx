import React, {PureComponent} from 'react';
import {Platform, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HeaderProps {
  children: any;
  style?: any;
  height: number;
}

const HeaderContainer: React.FC<HeaderProps> = ({children, style, height}) => {
  return (
    <SafeAreaView style={{height: height, ...style, padding: 6}}>
      {children}
    </SafeAreaView>
  );
};

export default HeaderContainer;
