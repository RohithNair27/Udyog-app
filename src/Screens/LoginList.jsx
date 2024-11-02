import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WorkerData from '../components/WorkerData';
import {getData, removeData} from '../utils/Storage';
import {useIsFocused, useRoute} from '@react-navigation/native';
const LoginList = () => {
  const employeeData = [
    {
      name: 'Alice Johnson',
      hoursWorked: 8,
      loggedIn: '08:30 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Bob Smith',
      hoursWorked: 7,
      loggedIn: '09:00 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Charlie Brown',
      hoursWorked: 6,
      loggedIn: '09:15 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Diana Prince',
      hoursWorked: 8,
      loggedIn: '08:45 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Eve Adams',
      hoursWorked: 5,
      loggedIn: '09:30 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: 'Frank Wright',
      hoursWorked: 9,
      loggedIn: '08:00 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Grace Lee',
      hoursWorked: 7,
      loggedIn: '09:10 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      name: 'Hank Pym',
      hoursWorked: 8,
      loggedIn: '08:50 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      name: 'Ivy Williams',
      hoursWorked: 6,
      loggedIn: '09:20 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      name: 'Jack White',
      hoursWorked: 5,
      loggedIn: '09:05 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Kelly Green',
      hoursWorked: 7,
      loggedIn: '08:15 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Liam Black',
      hoursWorked: 8,
      loggedIn: '08:45 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      name: 'Mia Brown',
      hoursWorked: 6,
      loggedIn: '09:00 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
      name: 'Noah Taylor',
      hoursWorked: 8,
      loggedIn: '08:30 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Olivia Jones',
      hoursWorked: 5,
      loggedIn: '09:15 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      name: 'Peter Parker',
      hoursWorked: 9,
      loggedIn: '08:00 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      name: 'Quinn Smith',
      hoursWorked: 7,
      loggedIn: '09:10 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      name: 'Ryan Gosling',
      hoursWorked: 8,
      loggedIn: '08:50 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      name: 'Sophia Martinez',
      hoursWorked: 6,
      loggedIn: '09:20 AM',
      imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      name: 'Tom Hardy',
      hoursWorked: 5,
      loggedIn: '09:05 AM',
      imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
  ];

  // Example of accessing the data

  // Example of accessing the data

  const isFocused = useIsFocused();
  const [peopleLogedIn, setPeopleLogedIn] = useState();
  const getDataFromLocal = async () => {
    const data = await getData();

    setPeopleLogedIn(data);
  };
  console.log(peopleLogedIn, 'people');
  useEffect(() => {
    getDataFromLocal();
    // removeData();
  }, [isFocused]);
  return (
    <View style={styles.body}>
      <FlatList
        data={employeeData}
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
