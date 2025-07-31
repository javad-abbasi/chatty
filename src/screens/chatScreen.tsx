import { View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AppHeader from '../components/header/appHeader';
import SentMessageCard from '../components/sentMessageCard/sentMessageCard';
import ResponseMessageCard from '../components/responseMessageCard/responseMessageCard';
import { FlatList } from 'react-native';
import { s } from 'react-native-size-matters';
import { RECEIVED, SENT } from '../constants/chat';
import ChatInput from '../components/chatInput/chatInput';
import { KeyboardAvoidingView } from 'react-native';
import EmpyChat from '../components/emptyChat/empyChat';
import { useKeyboardState } from '../hooks/useKeyboardState';
import { getHuggingFaceResponse } from '../api/http-requests';
interface Message {
  message: string;
  id: number;
  type: string;
}
const ChatScreen = () => {
  const [messagesData, setMessagesData] = useState<Message[]>([]);
  const [msgInput, setMsgInput] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const { isKeyboardVisible, keyboardHeight } = useKeyboardState();

  // Function to make FlatList scroll to bottom
  const scrollToBottom = () => {
    if (flatListRef.current && messagesData.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };
  useEffect(() => {
    scrollToBottom;
  }, [messagesData, isKeyboardVisible]);

  const getresFromAI = async (msg: string) => {
    const generatedText = await getHuggingFaceResponse(msg);
    onGetResponse(generatedText);
  };
  // Function to receive static messages
  const onGetResponse = (response: string) => {
    setMessagesData(prevMessages => {
      return [
        ...prevMessages,
        {
          message: response,
          id: prevMessages.length + 1,
          type: RECEIVED,
        },
      ];
    });
  };
  // Function to send a new message to AI
  const onMessageSend = (sentMsg: string) => {
    setMessagesData(prevMessages => {
      return [
        ...prevMessages,
        {
          message: msgInput,
          id: prevMessages.length + 1,
          type: SENT,
        },
      ];
    });
    setTimeout(() => {
      getresFromAI(sentMsg);
    }, 1000);
  };
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <AppHeader />

        <FlatList
          ref={flatListRef}
          data={messagesData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>
            item.type === SENT ? (
              <SentMessageCard message={item.message} />
            ) : (
              <ResponseMessageCard message={item.message} />
            )
          }
          contentContainerStyle={{ paddingHorizontal: s(8) }}
          ListEmptyComponent={<EmpyChat />}
          onLayout={scrollToBottom}
          onContentSizeChange={scrollToBottom}
        />
        <ChatInput
          messageValue={msgInput}
          setMessageValue={setMsgInput}
          onMessageSent={onMessageSend}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
