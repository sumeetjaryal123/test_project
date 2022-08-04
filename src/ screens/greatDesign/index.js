import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {
  CommunityItem,
  DiscoverItem,
  Header,
  SearchView,
  TrendingItem,
} from '../../components';
import {DESIGNDATA} from '../../utils/constant';
import {Colors} from '../../utils/colors';

export default function GreatDesign() {
  const renderDiscoverItem = ({item}) => {
    return <DiscoverItem item={item} />;
  };
  const renderCommunityItem = ({item}) => {
    return <CommunityItem item={item} />;
  };

  const renderTrendingItem = ({item}) => {
    return <TrendingItem item={item} />;
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{backgroundColor: index === 1 && Colors.Black, paddingTop: 12}}>
        <Text
          style={{
            paddingLeft: 12,
            fontSize: 24,
            fontWeight: 'bold',
            color: index === 1 ? Colors.White : Colors.Black,
          }}>
          {item.title}
        </Text>
        {index === 0 && (
          <FlatList
            horizontal
            data={item.items}
            renderItem={renderDiscoverItem}
          />
        )}
        {index === 1 && (
          <FlatList
            horizontal
            data={item.items}
            renderItem={renderCommunityItem}
          />
        )}
        {index === 2 && (
          <FlatList
            horizontal
            data={item.items}
            renderItem={renderTrendingItem}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />
      {/* Search View */}
      <SearchView />
      <FlatList data={DESIGNDATA} renderItem={renderItem} />
    </SafeAreaView>
  );
}
