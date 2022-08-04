import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function HomeButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
