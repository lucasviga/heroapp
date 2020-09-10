import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {HeaderSearch} from './styles';

export default function Header(onchange) {
  return (
    <HeaderSearch>
      <Icon name="menu" color="#FFF" size={40} />

      <Icon name="search" color="#FFF" size={40} />
    </HeaderSearch>
  );
}
