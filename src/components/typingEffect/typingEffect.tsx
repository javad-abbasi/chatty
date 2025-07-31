import { Text, TextStyle, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  style?: TextStyle;
}

const TypingEffect: FC<TypingEffectProps> = ({ text, style }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    const words = text.split('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < words.length - 1) {
        setDisplayedText(prev => `${prev}${words[index]}`);

        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <View>
      <Text style={style}>{displayedText}</Text>
    </View>
  );
};

export default TypingEffect;
