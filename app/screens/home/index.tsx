import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import HeaderContainer from '../../component/Header/AppHeader';
import {blue, primary, silver, white} from '../../constants/colors';
import {screenHeight, screenWidth} from '../../constants/dimensions';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProgressBar from 'react-native-progress/Bar';
import Flex from '../../component/Layout/Flex';
import {styles} from './styles';
import {dailyread} from '../../data/dailyread';
import DailyRead from '../../component/List/DailyRead';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SlideModal from '../../component/SlideModal';
import Poll from '../../component/List/Poll';
import {API} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import {pollAction} from '../../store/actions';
import {State} from '../../store/reducers';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const dispatch = useDispatch();
  const {pollList, pollResults, answered} = useSelector(
    (state: State) => state.poll,
  );

  console.log(answered, pollResults);

  const [pollLoaded, setPollLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const pollModal = React.useRef(null);

  React.useEffect(() => {
    loadPollOptions();
  }, []);

  const loadPollOptions = () => {
    API.pollData({
      success: (data: []) => {
        setPollLoaded(true);
        dispatch(pollAction.setPollList(data));
      },
      error: (error: any) => {
        setError(error);
        console.log(error);
      },
    });
  };

  const handleNoAnswer = () => {
    API.loadAnswers(
      {
        success: (data: any) => {
          dispatch(pollAction.setPollResults(data.answer_stats));
        },
        error: (error: any) => {
          setError(error);
          console.log(error);
        },
      },
      {
        percentages: 'null',
      },
    );
  };

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
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const cancelPoll = () => {
    setPollLoaded(false);
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

      {pollLoaded && (
        <TouchableOpacity onPress={handlePoll} style={styles.openpoll}>
          <Flex justify="space-between">
            <Flex>
              <Text style={styles.dailypoll}>Mojo’s daily poll 📅 </Text>
              <Text style={styles.open}>Open</Text>
            </Flex>
            <TouchableOpacity onPress={cancelPoll}>
              <MaterialIcons name="cancel" size={24} color="white" />
            </TouchableOpacity>
          </Flex>
        </TouchableOpacity>
      )}
      <SlideModal modalVisible={modalVisible} requestClose={closeModal}>
        <View>
          <TouchableOpacity style={{padding: 12}} onPress={closeModal}>
            <AntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
          <View style={{padding: 12}}>
            <Text style={{fontSize: 30, fontWeight: '700', marginVertical: 20}}>
              {pollList.question_text}
            </Text>
            <FlatList
              data={pollList.answers_options}
              renderItem={({item}) => <Poll {...item} />}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.response}>
                {answered
                  ? pollResults.response_count
                  : pollList.response_count}{' '}
                responses
              </Text>
              {answered ? null : (
                <TouchableOpacity onPress={handleNoAnswer}>
                  <Text style={styles.noAnswer}>I don't want to answer</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{height: 100}} />
        </View>
      </SlideModal>
    </View>
  );
};

export default Home;
