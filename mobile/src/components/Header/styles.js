import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeArea = styled(SafeAreaView)`
  flex: 0;
  padding-bottom: 0;
  background: black;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const CountProduct = styled.Text`
  position: absolute;
  background: #7159C1;
  width: 18px;
  height: 18px;
  text-align: center;
  font-weight: bold;
  right: -5px;
  top: -5px;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`
