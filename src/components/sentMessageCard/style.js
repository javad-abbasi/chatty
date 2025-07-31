import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../../globalStyles/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: vs(4),
  },
  messageContainer: {
    backgroundColor: colors.black,
    borderRadius: s(20),
    maxWidth: '80%',
    padding: s(12),
  },
  textMessage: {
    fontSize: s(14),
    color: colors.white,
  },
});

export default style;
