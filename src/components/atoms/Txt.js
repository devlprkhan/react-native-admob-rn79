import React from 'react';
import {Text} from 'react-native';

export default function Txt({children, style, ...props}) {
  return (
    <Text style={[{fontSize: 16, color: 'white'}, style]} {...props}>
      {children}
    </Text>
  );
}
