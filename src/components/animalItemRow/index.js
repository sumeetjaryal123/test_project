import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
styles;
export default function AnimalItemRow({item}) {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: item.image_link}} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.habitatText}>{item.habitat}</Text>
      </View>
    </View>
  );
}
