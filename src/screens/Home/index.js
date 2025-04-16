import React from 'react';
import {View} from 'react-native';
import Txt from '../../components/atoms/Txt';
import styles from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Txt>🏠 Welcome to Home Screen</Txt>
    </View>
  );
}
