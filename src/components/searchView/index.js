import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {search} from '../../../assets';
import {Colors} from '../../utils/colors';
import {Strings} from '../../utils/constant';
import {styles} from './styles';
export default function SearchView() {
  return (
    <View style={styles.container}>
      <Image style={styles.searchIcon} resizeMode="contain" source={search} />
      <TextInput
        style={styles.textInput}
        placeholder={Strings.kSearchPlaceholder}
        placeholderTextColor={Colors.Gray}
      />
    </View>
  );
}
