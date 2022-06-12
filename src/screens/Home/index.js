import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {Header, TextInput, Card} from 'src/components/';
import Styles from './style';
import {connect} from 'react-redux';
import {addItems, setOrders} from '../../redux/actions/carts';

const Home = props => {
  const dummyData = [
    {
      id: 1,
      name: 'Mie Sedap',
      desc: '1 pcs',
      price: 2500,
      image: 'https://i.scdn.co/image/ab67616d0000b2733d3b60439616a720ee90b464',
      descriprion:
        'Lorem Ipsumaksjbhf, sjsjsjsasdsad asdkaskdksdka aslsdk sadajsdjasd asdasdasd asdasd sda ssshhs sasas kasas kasa asjjja asjasjajsa',
    },
    {
      id: 2,
      name: 'Indomie',
      desc: '1 pcs',
      price: 2500,
      image: 'https://static.bmdstatic.com/pk/product/large/601bcb0b17ee0.jpg',
      descriprion:
        'Lorem Ipsumaksjbhf, sjsjsjsasdsad asdkaskdksdka aslsdk sadajsdjasd asdasdasd asdasd sda ssshhs sasas kasas kasa asjjja asjasjajsa',
    },
    {
      id: 3,
      name: 'Mie Sedap',
      desc: '1 pcs',
      price: 2500,
      image: 'https://static.bmdstatic.com/pk/product/large/601bcb0b17ee0.jpg',
      descriprion:
        'Lorem Ipsumaksjbhf, sjsjsjsasdsad asdkaskdksdka aslsdk sadajsdjasd asdasdasd asdasd sda ssshhs sasas kasas kasa asjjja asjasjajsa',
    },
    {
      id: 4,
      name: 'Indomie',
      desc: '1 pcs',
      price: 2500,
      image: 'https://static.bmdstatic.com/pk/product/large/601bcb0b17ee0.jpg',
      descriprion:
        'Lorem Ipsumaksjbhf, sjsjsjsasdsad asdkaskdksdka aslsdk sadajsdjasd asdasdasd asdasd sda ssshhs sasas kasas kasa asjjja asjasjajsa',
    },
    {
      id: 5,
      name: 'Mie Sedap',
      desc: '1 pcs',
      price: 2500,
      image: 'https://static.bmdstatic.com/pk/product/large/601bcb0b17ee0.jpg',
      descriprion:
        'Lorem Ipsumaksjbhf, sjsjsjsasdsad asdkaskdksdka aslsdk sadajsdjasd asdasdasd asdasd sda ssshhs sasas kasas kasa asjjja asjasjajsa',
    },
    {
      id: 6,
      name: 'Indomie',
      desc: '1 pcs',
      price: 2500,
      image: 'https://static.bmdstatic.com/pk/product/large/601bcb0b17ee0.jpg',
      descriprion:
        'Lorem Ipsumaksjbhf, sjsjsjsasdsad asdkaskdksdka aslsdk sadajsdjasd asdasdasd asdasd sda ssshhs sasas kasas kasa asjjja asjasjajsa',
    },
    {
      id: 7,
      name: 'Indomie',
      desc: '1 pcs',
      price: 2500,
      image: 'https://static.bmdstatic.com/pk/product/large/601bcb0b17ee0.jpg',
      descriprion:
        'Lorem Ipsumaksjbhf, sjsjsjsasdsad asdkaskdksdka aslsdk sadajsdjasd asdasdasd asdasd sda ssshhs sasas kasas kasa asjjja asjasjajsa',
    },
  ];

  const addItem = item => {
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
      <Header.Home
        onPress={props.navigation}
        carts={props.carts.items.length}
      />
      <View style={Styles.wrapperSearch}>
        <TextInput.Search placeholder={'Search'} />
      </View>
      <View style={Styles.wrapperFlatlist}>
        <FlatList
          contentContainerStyle={Styles.spaceBetween}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={dummyData}
          renderItem={({item}) => (
            <Card.primaryCard
              onPress={() => addItem(item)}
              item={item}
              toDetail={() =>
                props.navigation.navigate('DetailItem', {data: item})
              }
            />
          )}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  carts: state.carts,
});

const mapDispatchToProps = {addItems, setOrders};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
