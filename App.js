import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'src/utils/colors';
import Icon from 'react-native-vector-icons/Octicons';
import {Text} from 'components/';

import Login from 'screens/Login';
import Home from 'screens/Home';
import History from 'screens/History';
import DetailItem from 'screens/DetailItem';
import Cart from 'screens/Cart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const customTabBarStyle = {
    tabBarHideOnKeyBoard: true,
    tabBarShowLabel: true,
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.grey,
    tabBarStyle: [
      {
        paddingVertical: 5,
      },
    ],
  };
  return (
    <Tab.Navigator screenOptions={customTabBarStyle}>
      <Tab.Screen
        name="Onboarding"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          headerShown: false,
          tabBarLabel: ({color}) => (
            <Text size="xxs" weight="semibold" color={color}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="history" color={color} size={24} />
          ),
          headerShown: false,
          tabBarLabel: ({color}) => (
            <Text size="xxs" weight="semibold" color={color}>
              History
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'white'}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailItem"
          component={DetailItem}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
