import {StyleSheet} from 'react-native';
import {Colors} from 'src/utils/colors';

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 40,
    height: 40,
  },
  wrapperIcon: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperTitte: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: Colors.primary,
  },
  divIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    alignItems: 'flex-end',
    width: 30,
    height: 30,
  },
  image: {
    width: undefined,
    height: 48,
  },
  iconLogout: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 48,
    height: 48,
    alignItems: 'center',
  },

  shoppingCart: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountCarts: {
    backgroundColor: Colors.greenWhite,
    position: 'absolute',
    paddingHorizontal: 4,
    borderRadius: 2,
  },
  logout: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default Styles;
