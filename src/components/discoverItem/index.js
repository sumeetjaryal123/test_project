import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {info, play} from '../../../assets';
import {styles} from './styles';

export default function DiscoverItem({item}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.backgroundBorder}
        style={styles.imageContainer}
        source={item.image}>
        <View style={styles.playContainer}>
          <Image style={styles.play} source={play} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Image style={styles.info} source={info} />
      </View>
    </View>
  );
}
