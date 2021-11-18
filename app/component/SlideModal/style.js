import { StyleSheet, Platform, StatusBar } from 'react-native';
import { white, text, silver, primaryColor } from '../../constants/colors';
import { screenHeight } from '../../constants/dimensions';


const style = StyleSheet.create({
  mask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.75)'
  },
  modal: {
    backgroundColor: white,
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    overflow: 'hidden',
    alignSelf: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 0,
    flexShrink: 1
  },
  container: {
    flex: 1,
    width: '100%',
    height: screenHeight(90),
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
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
