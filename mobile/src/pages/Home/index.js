import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  ProductList,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductValue,
  ProductContent,
  ActionButton,
  ActionIcon,
  ActionIconText,
  ActionButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    const { navigation } = this.props;

    return (
      <ProductList
        data={products}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item: product }) => (
          <ProductItem>
            <ProductImage source={{ uri: product.image }} />
            <ProductContent>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductValue>{product.formattedPrice}</ProductValue>
            </ProductContent>
            <ActionButton onPress={() => navigation.navigate('Cart')}>
              <ActionIcon>
                <Icon name="add-shopping-cart" size={16} color="#fff" />
                <ActionIconText>1</ActionIconText>
              </ActionIcon>
              <ActionButtonText>Adicionar</ActionButtonText>
            </ActionButton>
          </ProductItem>
        )}
      />
    );
  }
}

export default Home;
