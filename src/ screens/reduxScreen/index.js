import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {AnimalItemRow} from '../../components';
import EmptyData from '../../components/emptyData';

export default function ReduxScreen() {
  const data = useSelector(state => state.home.data);

  // Row
  const renderItem = ({item}) => {
    return <AnimalItemRow item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Animal data */}
      <FlatList
        data={data}
        ListEmptyComponent={<EmptyData />}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
