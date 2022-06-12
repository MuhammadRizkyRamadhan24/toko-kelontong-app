import {StyleSheet} from 'react-native';
import {Colors} from 'src/utils/colors';

const Styles = StyleSheet.create({
  w60: {width: '60%'},
  w30: {width: '30%'},
  h60: {height: '60%'},
  mt5: {marginTop: 5},

  containerPrimaryCard: {
    width: '46%',
    backgroundColor: Colors.brokenWhite,
    marginHorizontal: '2%',
    marginVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  wrapperImagePrimaryCard: {
    marginTop: '8%',
    width: '85%',
    justifyContent: 'center',
  },
  imagePrimaryCard: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  containerPrimaryCardBottom: {
    width: '85%',
    marginVertical: 10,
    flexDirection: 'row',
  },
  wrapperButtonPrimaryCard: {
    width: '40%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttonPrimaryCard: {
    width: 40,
    height: 40,
    backgroundColor: Colors.greenWhite,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  containerCardHistory: {
    padding: 15,
    backgroundColor: Colors.brokenWhite,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  containerCardHistoryLeft: {
    width: '50%',
  },
  containerCardHistoryRight: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  statusCardHistory: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 999,
  },

  wrapperCardCart: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    height: 80,
    marginBottom: 20,
  },
  imageCardCart: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  wrapperContentCardCart: {
    width: '70%',
    height: '100%',
  },
  wrapperButtonAddCardCart: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.ironsideGrey,
  },
  wrapperPriceCardCart: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperBottomCardCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Styles;
