import {View, Text, Image} from 'react-native';
import React from 'react';
import {heart, logo} from '../../../assets';
import {styles} from './styles';

export default function Header() {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image resizeMode="contain" style={styles.logo} source={logo} />
      </View>
      <View style={styles.heartContainer}>
        <Image style={styles.heart} source={heart} />
        <View style={styles.redDot} />
      </View>
    </View>
  );
}
