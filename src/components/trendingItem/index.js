import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {info, play} from '../../../assets';

export default function TrendingItem({item}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={item.image}>
        <View style={styles.playContainer}>
          <Image style={styles.play} source={play} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
