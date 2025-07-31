import { Text, View } from 'react-native';
import React from 'react';
import style from './style';
import AppIcon from '../../assets/icons/appIcon';

const EmpyChat = () => {
  return (
    <View style={style.container}>
      <AppIcon />
      <Text style={style.title}>Hello,</Text>
      <Text style={style.subtitle}>What can I help with?</Text>
    </View>
  );
};

export default EmpyChat;
