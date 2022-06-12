import {View, Image} from 'react-native';
import {TextInput, Text, Button} from 'src/components/';
import React from 'react';
import Styles from './style';
import Vector from '../../assets/grocery.png';
import {Colors} from 'src/utils/colors';

const Login = props => {
  return (
    <View style={Styles.wrapper}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image source={Vector} style={Styles.Image} />
      </View>

      <View style={Styles.containerForm}>
        <Text size="xl" weight="semibold" color={Colors.darkerBlack}>
          Login
        </Text>
        <TextInput.CustomTextInput placeholder={'Username'} />
        <TextInput.CustomTextInput placeholder={'Password'} isPassword />

        <Button
          text="Login"
          mode="default"
          style={Styles.btn}
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Login;
