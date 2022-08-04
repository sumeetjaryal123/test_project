import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {fetchAnimals} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {AnimalItemRow} from '../../components';

export default function PublicAPI() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.home.data);

  useEffect(() => {
    // fetch the animal data
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchAnimals());
  };

  // Row
  const renderItem = ({item}) => {
    return <AnimalItemRow item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Animal data */}
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}
