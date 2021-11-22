import { StyleSheet } from "react-native";
import { blue, white } from "../../constants/colors";
import { screenWidth } from "../../constants/dimensions";

export const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 12
  },
  accountIcon: {
      alignSelf: 'flex-end'
  },
  itemsView:{
      marginTop: 12
  },
  currentGoal: {
      color: white,
      fontSize: 18,
      fontWeight: '500'
  }, 
  moreConfident: {
      color: white,
      fontSize: 28,
      fontWeight: '800',
      lineHeight: 60,
      letterSpacing: 1.5
  },
  progressBar: {
      marginBottom: 27,
      marginTop: 12
  },
  daysCompleted: {
      color: white,
      fontWeight: '400',
  },
  day: {
      fontSize: 24,
      fontWeight: '700',
      marginVertical: 12
  },
  openpoll: {
          backgroundColor: blue,
          padding: 12,
          margin: 6,
          borderRadius: 8,
          position: 'absolute',
          bottom: 2,
          width: screenWidth(94),
          alignSelf: 'center',
        },
        dailypoll:{
            color: white,
            fontWeight: '400'
        },
        open:{
            color: white,
            fontWeight: '400'
        },
        response: {
            fontSize: 16,
            marginTop: 24,
            marginBottom: 48,
            fontWeight: '400'

        },
        noAnswer: {
            fontSize: 16,
            fontWeight: '400',
            textDecorationLine: 'underline'

        },
        xText: {
            fontSize: 24,
            padding: 12
        }
});