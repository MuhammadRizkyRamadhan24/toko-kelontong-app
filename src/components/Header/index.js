import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'components/';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from 'src/utils/colors';
import Styles from './style';

const Basic = ({
  title,
  size,
  onPressBack,
  onPressCart,
  back = true,
  carts = false,
  amountCarts,
}) => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.wrapperIcon}>
        {back && (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressBack}>
            <Icon name={'arrow-left'} size={25} color={Colors.darkerBlack} />
          </TouchableOpacity>
        )}
      </View>
      <View style={Styles.wrapperTitte}>
        <Text weight="semibold" color={Colors.darkerBlack} size={size}>
          {title}
        </Text>
      </View>
      <View style={Styles.wrapperIcon}>
        {carts && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPressCart}
            style={Styles.icon}>
            <View style={Styles.shoppingCart}>
              <Icon
                name={'shopping-cart'}
                size={25}
                color={Colors.darkerBlack}
              />
            </View>
            {amountCarts > 0 && (
              <View style={Styles.amountCarts}>
                <Text size="xxxs" weight="bold" color={Colors.white}>
                  {amountCarts}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const Home = ({onPress, carts}) => {
  return (
    <View style={Styles.header}>
      <View>
        <Text size="l" weight="semibold" color={Colors.white}>
          Selamat datang
        </Text>
        <Text color={Colors.white} size="s">
          Username
        </Text>
      </View>
      <View style={Styles.divIcon}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onPress.navigate('Cart')}
          style={Styles.icon}>
          <View style={Styles.shoppingCart}>
            <Icon name={'shopping-cart'} size={25} color={Colors.white} />
          </View>
          {carts > 0 && (
            <View style={Styles.amountCarts}>
              <Text size="xxxs" weight="bold" color={Colors.white}>
                {carts}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onPress.navigate('Login')}
          style={Styles.icon}>
          <View style={Styles.logout}>
            <Icon name={'log-out'} size={25} color={Colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default {Basic, Home};
