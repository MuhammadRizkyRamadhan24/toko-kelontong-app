import {View, Image} from 'react-native';
import React from 'react';
import {Header, Text, Button} from 'src/components/';
import Styles from './style';
import {Colors} from 'src/utils/colors';
import {connect} from 'react-redux';
import {addItems, setOrders} from '../../redux/actions/carts';

const DetailItem = props => {
  console.log(props.carts);
  const item = props.route.params.data;

  const addItem = () => {
    const data = {
      ...item,
      amount: 1,
      end_price: item.price,
    };
    const orders = props.carts.items;
    let getIndex;
    orders.map((order, index) => {
      if (
        order.id === data.id &&
        order.name === data.name &&
        order.image === data.image &&
        order.price === data.price &&
        order.desc === data.desc
      ) {
        getIndex = index;
      }
    });
    if (getIndex !== undefined) {
      orders[getIndex].amount += 1;
      orders[getIndex].end_price =
        orders[getIndex].price * orders[getIndex].amount;
      props.setOrders(orders);
    } else {
      props.addItems(data);
    }
  };

  return (
    <View style={Styles.wrapper}>
      <Header.Basic
        title={'Detail Barang'}
        amountCarts={props.carts.items.length}
        carts={true}
        onPressBack={() => props.navigation.goBack()}
        onPressCart={() => props.navigation.navigate('Cart')}
        size="m"
      />
      <View style={{flex: 1}}>
        <View style={Styles.wrapperTop}>
          <Image source={{uri: `${item.image}`}} style={Styles.image} />
          <View style={Styles.wrapperDetail}>
            <View style={Styles.wrapperName}>
              <Text weight="semibold" size="l" color={Colors.darkerBlack}>
                {item.name}
              </Text>
              <Text
                weight="semibold"
                size="xxs"
                color={Colors.ironsideGrey}
                ml={10}>
                {item.desc}
              </Text>
            </View>

            <View style={Styles.wrapperDesc}>
              <Text maxLines={5} size="s" color={Colors.ironsideGrey}>
                {item.descriprion}
              </Text>
            </View>
          </View>
        </View>

        <View style={Styles.wrapperBottom}>
          <View style={Styles.wrapperPrice}>
            <Text weight="medium" size="s" color={Colors.white}>
              Harga
            </Text>
            <Text weight="semibold" size="l" color={Colors.white}>
              Rp. {Number(item.price).toLocaleString('en')}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Button onPress={addItem} text="+ Keranjang" mode="default" />
          </View>
        </View>
      </View>
      {/* <View style={{flex: 1}}>
        <View
          style={{
            height: '65%',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={{uri: `${detailItem.image}`}} style={Styles.image} />
        </View>
        <View
          style={{
            height: '40%',
            backgroundColor: Colors.brokenWhite,
            marginTop: '-10%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{
              height: '70%',
              paddingHorizontal: 30,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text weight="semibold" size="l">
                {detailItem.name}
              </Text>
              <Text
                weight="semibold"
                size="xxs"
                color={Colors.ironsideGrey}
                ml={10}>
                {detailItem.desc}
              </Text>
            </View>

            <View style={{height: '50%', maxHeight: '60%'}}>
              <Text maxLines={5} size="s" color={Colors.ironsideGrey}>
                {detailItem.descriprion}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '30%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: Colors.greenWhite,
              paddingHorizontal: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{width: '50%'}}>
              <Text weight="medium" size="s" color={Colors.white}>
                Harga
              </Text>
              <Text weight="semibold" size="l" color={Colors.white}>
                Rp. {Number(detailItem.price).toLocaleString('en')}
              </Text>
            </View>
            <View style={{width: '50%'}}>
              <Button onPress={addItem} text="+ Keranjang" mode="default" />
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
};

const mapStateToProps = state => ({
  carts: state.carts,
});

const mapDispatchToProps = {addItems, setOrders};

export default connect(mapStateToProps, mapDispatchToProps)(DetailItem);
