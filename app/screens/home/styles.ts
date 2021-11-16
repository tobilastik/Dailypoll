import { StyleSheet } from "react-native";
import { white } from "../../constants/colors";

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
  }
});