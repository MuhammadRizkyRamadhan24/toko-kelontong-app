import {View, FlatList} from 'react-native';
import React from 'react';
import {Header, Text, Button, Card} from 'src/components/';
import Styles from './style';
import {Colors} from 'src/utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {addItems, setOrders} from '../../redux/actions/carts';

const Cart = props => {
  const subTotal =
    props.carts.items.length === 0
      ? 0
      : props.carts.items
          .map((element, idx) => element.price * element.amount)
          .reduce((acc, curr) => acc + curr);

  console.log(subTotal);

  const plus = item => {
    const orders = props.carts.items;
    let getIndex;
    orders.map((order, index) => {
      if (
        order.id === item.id &&
        order.name === item.name &&
        order.image === item.image &&
        order.price === item.price &&
        order.desc === item.desc &&
        order.amount === item.amount
      ) {
        getIndex = index;
      }
    });
    orders[getIndex].amount += 1;
    orders[getIndex].end_price =
      orders[getIndex].price * orders[getIndex].amount;
    props.setOrders(orders);
  };

  const minus = item => {
    const orders = props.carts.items;
    let getIndex;
    orders.map((order, index) => {
      if (
        order.id === item.id &&
        order.name === item.name &&
        order.image === item.image &&
        order.price === item.price &&
        order.desc === item.desc &&
        order.amount === item.amount
      ) {
        getIndex = index;
      }
    });
    orders[getIndex].amount -= 1;
    orders[getIndex].end_price =
      orders[getIndex].price * orders[getIndex].amount;
    props.setOrders(orders);
  };

  const deleteItem = item => {
    const orders = props.carts.items;
    let getIndex;
    orders.map((order, index) => {
      if (
        order.id === item.id &&
        order.name === item.name &&
        order.image === item.image &&
        order.price === item.price &&
        order.desc === item.desc &&
        order.amount === item.amount
      ) {
        getIndex = index;
      }
    });
    delete orders[getIndex];
    var newArray = orders.filter(
      value => Object.keys(value).length !== undefined,
    );
    props.setOrders(newArray);
  };

  return (
    <View style={Styles.wrapper}>
      <Header.Basic
        title={'Keranjang'}
        onPressBack={() => props.navigation.goBack()}
        size="m"
      />
      <View style={Styles.wrapperContent}>
        <View style={Styles.wrapperCards}>
          {props.carts.items.length !== 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={props.carts.items}
              renderItem={({item}) => (
                <Card.cardCart
                  item={item}
                  plus={() => plus(item)}
                  minus={() => minus(item)}
                  deleteItem={() => deleteItem(item)}
                  amount={item.amount}
                />
              )}
            />
          ) : (
            <>
              <Icon
                name={'shopping-bag'}
                size={60}
                color={Colors.ironsideGrey}
              />
              <Text
                size="m"
                weight="semibold"
                color={Colors.darkerBlack}
                style={Styles.textCardsEmpty}>
                Wah, Keranjang belanjaanmu masih kosong!
              </Text>
            </>
          )}
        </View>
        <View style={Styles.wrapperTotal}>
          <View style={Styles.wrapperTotalLeft}>
            <Text weight="medium" size="s" color={Colors.white}>
              Total Harga
            </Text>
            <Text weight="semibold" size="l" color={Colors.white}>
              Rp. {Number(subTotal).toLocaleString('en')}
            </Text>
          </View>
          <View style={Styles.wrapperTotalRight}>
            <Button text="Beli" mode="default" />
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  carts: state.carts,
});

const mapDispatchToProps = {addItems, setOrders};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
