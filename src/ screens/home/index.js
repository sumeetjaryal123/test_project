import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {HomeButton} from '../../components';
import {RouteName, Strings} from '../../utils/constant';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* Public API */}
      <HomeButton
        title={Strings.kPublicAPI}
        onPress={() => navigation.navigate(RouteName.kPublicAPI)}
      />
      {/* Redux */}
      <HomeButton
        title={Strings.kRedux}
        onPress={() => navigation.navigate(RouteName.kRedux)}
      />
      {/* Great Design */}
      <HomeButton
        title={Strings.kGreatDesign}
        onPress={() => navigation.navigate(RouteName.kGreatDesign)}
      />
    </View>
  );
}
