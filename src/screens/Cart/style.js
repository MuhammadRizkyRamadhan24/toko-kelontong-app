import {StyleSheet} from 'react-native';
import {Colors} from 'src/utils/colors';

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapperContent: {flex: 1, marginTop: 20},
  wrapperCards: {
    height: '88.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCardsEmpty: {
    marginHorizontal: 50,
    marginVertical: 10,
    textAlign: 'center',
  },
  wrapperTotal: {
    height: '11.5%',
    paddingHorizontal: 30,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.greenWhite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  wrapperTotalLeft: {
    width: '60%',
    paddingTop: '1%',
  },
  wrapperTotalRight: {
    width: '40%',
  },
});

export default Styles;
