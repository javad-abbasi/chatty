import { StyleSheet } from 'react-native';
import { vs } from 'react-native-size-matters';
import { colors } from '../../globalStyles/colors';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(5),
    backgroundColor: colors.black,
    marginBottom: vs(10),
  },
});

export default style;
