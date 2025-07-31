import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: s(20),
    paddingTop: vs(140),
  },
  title: {
    fontSize: s(18),
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  subtitle: {
    fontSize: s(14),
  },
});

export default style;
