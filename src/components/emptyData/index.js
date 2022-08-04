import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function EmptyData() {
  return (
    <View style={styles.container}>
      <Text>No Data Found</Text>
    </View>
  );
}
