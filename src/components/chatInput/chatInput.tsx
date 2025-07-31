import { TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import style from './style';
import Feather from 'react-native-vector-icons/Feather';
import { s } from 'react-native-size-matters';
import { colors } from '../../globalStyles/colors';

interface ChatInputProps {
  messageValue: string;
  setMessageValue: (message: string) => void;
  onMessageSent: (message: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({
  messageValue,
  setMessageValue,
  onMessageSent,
}) => {
  const sendMessageHandler = () => {
    if (messageValue.trim().length > 0) {
      onMessageSent(messageValue);
      setMessageValue('');
    }
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.Input}
        value={messageValue}
        onChangeText={setMessageValue}
        placeholder="Type a message..."
        multiline
        placeholderTextColor={colors.black}
      />
      <TouchableOpacity style={style.sendButton} onPress={sendMessageHandler}>
        <Feather name={'send'} size={s(15)} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
