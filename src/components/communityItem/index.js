import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function CommunityItem({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
    </View>
  );
}
