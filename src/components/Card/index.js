import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'src/components/';
import {Colors} from 'src/utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import Styles from './style';

const primaryCard = ({item, toDetail, onPress}) => {
  return (
    <View style={Styles.containerPrimaryCard}>
      <TouchableOpacity
        activeOpacity={0.2}
        style={Styles.wrapperImagePrimaryCard}
        onPress={toDetail}>
        <Image
          source={{uri: `${item.image}`}}
          style={Styles.imagePrimaryCard}
        />
      </TouchableOpacity>
      <View style={Styles.containerPrimaryCardBottom}>
        <View style={Styles.w60}>
          <Text size="s" weight="semibold" color={Colors.darkerBlack}>
            {item.name}
          </Text>
          <Text size="xxs" weight="semibold" color={Colors.ironsideGrey}>
            {item.desc}
          </Text>
          <Text
            size="xs"
            weight="semibold"
            color={Colors.darkerBlack}
            style={Styles.mt5}>
            Rp. {Number(item.price).toLocaleString('en')}
          </Text>
        </View>
        <View style={Styles.wrapperButtonPrimaryCard}>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={Styles.buttonPrimaryCard}>
            <Icon name="plus" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const cardHistory = ({item}) => {
  return (
    <View style={Styles.containerCardHistory}>
      <View style={Styles.containerCardHistoryLeft}>
        <Text size="s" weight="semibold" color={Colors.darkerBlack}>
          {item.orderId}
        </Text>
        <Text weight="semibold" color={Colors.ironsideGrey}>
          Rp. {Number(item.total).toLocaleString('en')}
        </Text>
      </View>
      <View style={Styles.containerCardHistoryRight}>
        <View
          style={[
            item.status === 'sukses' && {backgroundColor: Colors.green},
            item.status === 'belum dibayar' && {backgroundColor: Colors.error},
            item.status === 'belum diantar' && {
              backgroundColor: Colors.statusYellow,
            },
            Styles.statusCardHistory,
          ]}>
          <Text size="xxs" weight="semibold" color={Colors.white}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

const cardCart = ({item, minus, plus, deleteItem, amount}) => {
  return (
    <View style={Styles.wrapperCardCart}>
      <View style={Styles.w30}>
        <Image source={{uri: `${item.image}`}} style={Styles.imageCardCart} />
      </View>
      <View style={Styles.wrapperContentCardCart}>
        <View style={Styles.h60}>
          <Text size="s" maxLines={1} color={Colors.darkerBlack}>
            {item.name}
          </Text>
          <Text color={Colors.ironsideGrey}>{item.desc}</Text>
        </View>
        <View style={Styles.wrapperPriceCardCart}>
          <Text size="s" weight="semibold" color={Colors.darkerBlack}>
            Rp. {Number(item.price).toLocaleString('en')}
          </Text>
          <View style={Styles.wrapperBottomCardCart}>
            <TouchableOpacity
              onPress={deleteItem}
              activeOpacity={0.5}
              style={{marginRight: 10}}>
              <Icon name="trash" size={16} color={Colors.ironsideGrey} />
            </TouchableOpacity>
            <View style={Styles.wrapperButtonAddCardCart}>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name="minus"
                  onPress={minus}
                  size={15}
                  color={amount === 1 ? Colors.ironsideGrey : Colors.primary}
                  disabled={amount === 1 ? true : false}
                />
              </TouchableOpacity>
              <Text size="xs" weight="semibold" ml={15} mr={15}>
                {item.amount}
              </Text>
              <TouchableOpacity onPress={plus} activeOpacity={0.5}>
                <Icon name="plus" size={15} color={Colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default {primaryCard, cardHistory, cardCart};
