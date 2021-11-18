import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import HeaderContainer from '../../component/Header/AppHeader';
import {blue, primary, silver, white} from '../../constants/colors';
import {screenHeight, screenWidth} from '../../constants/dimensions';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from 'react-native-progress/Bar';
import Flex from '../../component/Layout/Flex';
import {styles} from './styles';
import {dailyread} from '../../data/dailyread';
import DailyRead from '../../component/List/DailyRead';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SlideModal from '../../component/SlideModal';
import Poll from '../../component/List/Poll';

interface HomeProps {}

const data = [
  {
    text: 'Always',
  },
  {
    text: 'Most of the time',
  },
  {
    text: 'About half of the time',
  },
  {
    text: 'Rarely',
  },
  {
    text: 'Never',
  },
];

const Home = (props: HomeProps) => {
  const pollModal = React.useRef(null);

  const renderHeader = () => {
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

  const handlePoll = () => {
    setTimeout(() => pollModal.current.toggle(), 200);
  };
  return (
    <View style={{backgroundColor: white, flex: 1}}>
      {renderHeader()}
      <View style={{padding: 12}}>
        <Text style={styles.day}>Day 1</Text>
        <FlatList
          data={dailyread}
          renderItem={({item}) => <DailyRead {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <TouchableOpacity onPress={handlePoll} style={styles.openpoll}>
        <Flex justify="space-between">
          <Flex>
            <Text style={styles.dailypoll}>Mojo’s daily poll 📅 </Text>
            <Text style={styles.open}>Open</Text>
          </Flex>
          <MaterialIcons name="cancel" size={24} color="white" />
        </Flex>
      </TouchableOpacity>
      <SlideModal fullHeight ref={pollModal}>
        <View style={{padding: 12}}>
          <Text style={{fontSize: 30, fontWeight: '700', marginVertical: 20}}>
            How often do you watch porn while masturbating?
          </Text>
          <FlatList data={data} renderItem={({item}) => <Poll {...item} />} />
          <Text>48999 responses</Text>

          <Text>I don't want to answer</Text>
        </View>
      </SlideModal>
    </View>
  );
};

export default Home;
