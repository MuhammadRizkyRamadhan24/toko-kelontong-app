import {FlatList, View} from 'react-native';
import React from 'react';
import {Header, Card} from 'src/components/';
import Styles from './style';

const History = ({navigation}) => {
  const historyDummy = [
    {
      orderId: 2819681111,
      total: 200000,
      status: 'sukses',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum dibayar',
    },

    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum diantar',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'sukses',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum dibayar',
    },

    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum diantar',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'sukses',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum dibayar',
    },

    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum diantar',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'sukses',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum dibayar',
    },

    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum diantar',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'sukses',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum dibayar',
    },

    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum diantar',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'sukses',
    },
    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum dibayar',
    },

    {
      orderId: 2819681111,
      total: 200000,
      status: 'belum diantar',
    },
  ];
  return (
    <View style={Styles.wrapper}>
      <Header.Basic back={false} title={'History'} size="m" />
      <View style={Styles.wrapperContent}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={historyDummy}
          renderItem={({item}) => <Card.cardHistory item={item} />}
        />
      </View>
    </View>
  );
};

export default History;
