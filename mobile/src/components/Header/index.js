import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native';
import { SafeArea, Container, Logo, CountProduct } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header({ navigation }) {
  return (
    <SafeArea>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo source={logo} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={28} />
          <CountProduct>0</CountProduct>
        </TouchableOpacity>
      </Container>
    </SafeArea>
  );
}
