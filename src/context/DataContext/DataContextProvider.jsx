import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DataContext} from './DataContext';

const DataContextProvider = ({children}) => {
  const [userId, setUserId] = useState();
  const [farmHandDataList, setFarmHandDataList] = useState([
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
  ]);

  function updateFarmHandList(newFarmHandData) {
    farmHandDataList.push(newFarmHandData);
  }
  return (
    <DataContext.Provider
      value={{userId, setUserId, updateFarmHandList, farmHandDataList}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
