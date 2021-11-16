import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderContainer from '../../component/Header/AppHeader';
import {primary, silver, white} from '../../constants/colors';
import {screenHeight} from '../../constants/dimensions';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from 'react-native-progress/Bar';
import Flex from '../../component/Layout/Flex';
import {styles} from './styles';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <HeaderContainer
      height={screenHeight(32)}
      style={{backgroundColor: primary}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.accountIcon}>
          <Icons name="account-circle-outline" size={30} color={white} />
        </TouchableOpacity>
        <View style={styles.itemsView}>
          <Text style={styles.currentGoal}>Your current goal</Text>
          <Flex>
            <Text style={styles.moreConfident}>Feel more confident</Text>
            <Icons name="square-edit-outline" size={24} color={white} />
          </Flex>
          <View style={styles.progressBar}>
            <ProgressBar
              color={white}
              unfilledColor={'gray'}
              borderWidth={0}
              progress={0.2}
              width={200}
            />
          </View>
          <Text style={styles.daysCompleted}>1 / 7 days completed </Text>
        </View>
      </View>
    </HeaderContainer>
  );
};

export default Home;
