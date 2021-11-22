import { StyleSheet, Platform, StatusBar } from 'react-native';
import { white, } from '../../constants/colors';
import { screenHeight } from '../../constants/dimensions';


const style = StyleSheet.create({
  container: {
    backgroundColor: white,
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    overflow: 'hidden',
    alignSelf: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 0,
    top: 100,

  },
  headerText: {
    color: white,
    fontSize: 20,
    padding: 20,
  },
  closeIcon: {
    fontSize: 30,
    color: white
  }
})

export default style;
