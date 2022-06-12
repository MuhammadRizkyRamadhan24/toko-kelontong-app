import {StyleSheet} from 'react-native';
import {Colors} from 'src/utils/colors';

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapperTop: {height: '88.5%'},
  image: {
    width: '100%',
    height: '65%',
    resizeMode: 'contain',
    marginTop: 10,
  },
  wrapperDetail: {
    height: '35%',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  wrapperName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperDesc: {height: '50%', maxHeight: '60%'},
  wrapperBottom: {
    height: '11.5%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.greenWhite,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperPrice: {width: '50%', paddingTop: '1%'},
});

export default Styles;
