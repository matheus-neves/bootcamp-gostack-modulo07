import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ProductList = styled.FlatList`
  flex: 1;
  background: #000;
  padding: 20px;
`;

export const ProductItem = styled.View`
  background: #fff;
  border-radius: 4px;
  width: 220px;
  max-height: 368px;
  margin-right: 15px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductContent = styled.View`
  flex: 1;
  /* border: 1px solid red; */
  padding-left: 10px;
  /* height: 78px; */
  justify-content: space-between;
`;

export const ProductTitle = styled.Text`
  color: #333333;
  font-size: 16px;
  line-height: 21px;
`;

export const ProductValue = styled.Text`
  color: #000;
  font-size: 21px;
  font-weight: bold;
`;

export const ActionButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-top: 8px;
  background: #7159c1;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
`;

export const ActionIcon = styled.View`
  width: 53px;
  flex-direction: row;
  background: #5a479a;
  padding: 13px 12px;
  align-items: center;
`;

export const ActionIconText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 2px;
`;

export const ActionButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
  flex: 1;
  text-align: center;
`;
