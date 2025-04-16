import React from 'react';
import {View} from 'react-native';
import Txt from '../../components/atoms/Txt';
import NativeAdExample from '../../components/organisms/NativeAdExample';
import styles from './styles';

export default function NativeAdScreen() {
  return (
    <View style={styles.container}>
      <Txt>📢 Native Ad Test</Txt>
      <NativeAdExample />
    </View>
  );
}
