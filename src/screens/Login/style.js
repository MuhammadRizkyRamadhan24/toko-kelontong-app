import {StyleSheet} from 'react-native';
import {Colors} from 'src/utils/colors';

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  Image: {
    width: 200,
    height: 200,
    resizeMode: 'center',
  },
  containerForm: {
    paddingTop: 20,
  },
  btn: {
    marginTop: 30,
  },
});

export default Styles;
