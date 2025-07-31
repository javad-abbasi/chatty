import { View } from 'react-native';
import React, { FC } from 'react';
import style from './style';
import TypingEffect from '../typingEffect/typingEffect';
interface ResponseMessageCardProps {
  message: string;
}

const ResponseMessageCard: FC<ResponseMessageCardProps> = ({ message }) => {
  return (
    <View style={style.container}>
      <View style={style.messageContainer}>
        {/* <Text style={style.messageText}>{message}</Text> */}
        <TypingEffect style={style.messageText} text={message} />
      </View>
    </View>
  );
};

export default ResponseMessageCard;
