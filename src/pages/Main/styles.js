import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import {TextInput} from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

export const CardMain = styled.View`
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: #000;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
`;

export const ImageHero = styled.Image`
  height: 300px;
  width: 100%;
`;

export const ListCards = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  align-self: stretch;
`;

export const CardListed = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  height: 120px;
  margin: 25px 25px 10px 25px;
  padding: 10px;
`;

export const ImagemCard = styled.Image`
  height: 130px;
  width: 100px;
  border-radius: 10px;
`;

export const DetailsCard = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px 10px;
  height: 110px;
  background-color: #dfe3fb;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const ButtonExplorer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 25px;
  padding: 15px 40px;
  margin-top: -70px;
  z-index: 5;
`;

export const ButtonExplorerText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const HeaderSearch = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  height: 60px;
  padding: 0 20px;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const InputPesquisa = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 20px;
  margin-left: 10px;
  color: #fff;
  padding: 0 30px;
  height: 35px;
`;
