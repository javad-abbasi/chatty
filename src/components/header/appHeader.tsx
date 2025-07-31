import { View } from 'react-native';
import React from 'react';
import style from './style';
import HeaderIcon from '../../assets/icons/headerIcon';

const AppHeader = () => {
  return (
    <View style={style.container}>
      <HeaderIcon />
    </View>
  );
};

export default AppHeader;
