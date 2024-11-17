import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const WorkerData = ({data}) => {
  const [timeSpentPercent, setTimeSpentPercent] = useState(1);
  let TimeSpent = data.hoursWorked;
  const TotalWorkTime = 8;
  function findPercetage() {
    if (TimeSpent <= 8) {
      setTimeSpentPercent((TimeSpent / TotalWorkTime) * 100);
    } else {
      setTimeSpentPercent(100);
    }
  }
  useEffect(() => {
    findPercetage();
  }, []);
  console.log(data.name, timeSpentPercent);
  return (
    <View style={styles.body}>
      <Image
        src={data.imageUrl}
        resizeMode="contain"
        style={{height: 50, width: 50, borderRadius: 100}}
      />
      <View style={{width: '50%'}}>
        <Text style={styles.nameText}>{data.name}</Text>
        <View style={styles.statusContainer}>
          <View
            style={{
              ...styles.statusUpdated,
              width: `${timeSpentPercent}%`,
            }}></View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              ...styles.stateIndicator,
              backgroundColor: '#3CB371',
            }}></View>
          <Text style={styles.nameText}>Checked In</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              ...styles.stateIndicator,
              backgroundColor: 'red',
            }}></View>
          <Text style={styles.nameText}>Checked out</Text>
        </View>
      </View>
    </View>
  );
};

export default WorkerData;

const styles = StyleSheet.create({
  body: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    height: 80,
    marginBottom: 10,
    alignSelf: 'center',
  },
  nameText: {
    color: '#000',
  },
  statusContainer: {
    borderWidth: 0.6,
    height: '15%',
    borderRadius: 10,
  },
  statusUpdated: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(60, 179, 113, 0.9)',
  },
  stateIndicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginRight: 5,
    backgroundColor: 'red',
  },
});
