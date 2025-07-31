import { Text, View } from 'react-native';
import React, { FC } from 'react';
import style from './style';

interface SentMessageCardProps {
  message: string;
}

const SentMessageCard: FC<SentMessageCardProps> = ({ message }) => {
  return (
    <View style={style.container}>
      <View style={style.messageContainer}>
        <Text style={style.textMessage}>{message}</Text>
      </View>
    </View>
  );
};

export default SentMessageCard;
