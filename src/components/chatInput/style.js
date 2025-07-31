import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../../globalStyles/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: s(10),
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.mediumGray,
  },
  Input: {
    flex: 1,
    backgroundColor: colors.gray,
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
    marginRight: 10,
    borderRadius: s(20),
  },
  sendButton: {
    width: s(35),
    height: s(35),
    borderRadius: s(20),
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default style;
