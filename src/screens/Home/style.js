import {StyleSheet} from 'react-native';
import {Colors} from 'src/utils/colors';

const Styles = StyleSheet.create({
  spaceBetween: {justifyContent: 'space-between'},

  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapperFlatlist: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    paddingTop: 20,
  },
  wrapperSearch: {paddingHorizontal: 30, marginTop: -25},
});

export default Styles;
