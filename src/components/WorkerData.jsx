import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const WorkerData = ({data}) => {
  return (
    <View style={styles.body}>
      <Image
        src={data.imageUrl}
        resizeMode="contain"
        style={{height: 65, width: 65, borderRadius: 50}}
      />
      <View style={{width: '50%'}}>
        <Text style={styles.nameText}>{data.name}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusUpdated}></View>
        </View>
      </View>

      <Text style={styles.nameText}>{data.loggedIn}</Text>
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
    width: '80%',
    height: 80,
    marginBottom: 10,
    alignSelf: 'center',
  },
  nameText: {
    color: '#000',
  },
  statusContainer: {
    borderWidth: 1,
    height: '20%',
    borderRadius: 10,
  },
  statusUpdated: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'green',
  },
});
