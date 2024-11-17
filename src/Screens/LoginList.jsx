import {StyleSheet, View, Dimensions, FlatList} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import WorkerData from '../components/WorkerData';
import {getData, removeData} from '../utils/Storage';
import {DataContext} from '../context/DataContext/DataContext';
import {useIsFocused, useRoute} from '@react-navigation/native';
const LoginList = () => {
  const {farmHandDataList} = useContext(DataContext);
  // const isFocused = useIsFocused();
  // const getDataFromLocal = async () => {
  //   const data = await getData();

  //   setPeopleLogedIn(data);
  // };

  // useEffect(() => {
  //   getDataFromLocal();
  //   // removeData();
  // }, [isFocused]);
  return (
    <View style={styles.body}>
      <FlatList
        data={farmHandDataList}
        renderItem={({item}) => <WorkerData data={item} />}
        // keyExtractor={item => item.id}
      />
    </View>
  );
};

export default React.memo(LoginList);

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 2,
  },
  header: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: HEIGHT * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
    // borderWidth: 1,
  },
  buttonBody: {
    borderWidth: 1,
    marginBottom: '5%',
    height: HEIGHT * 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
});
