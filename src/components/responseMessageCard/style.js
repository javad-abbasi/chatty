import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../../globalStyles/colors';

const style = StyleSheet.create({
  container: {
    marginVertical: vs(14),
    marginHorizontal: s(8),
    paddingBottom: vs(12),
    marginBottom: vs(12),
  },
  messageContainer: {
    backgroundColor: colors.grayBack,
    borderRadius: s(20),
    maxWidth: '80%',
    padding: s(10),
  },
  messageText: {
    color: colors.black,
    fontSize: s(14),
  },
});
export default style;
