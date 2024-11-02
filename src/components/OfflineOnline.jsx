import {StyleSheet, Text, View, Animated, useAnimatedValue} from 'react-native';
import React, {useEffect, useContext} from 'react';
import AppStatusContext from '../context/AppStatusContext/AppStatusContext';
const OfflineOnline = () => {
  const heartBeatAnimation = useAnimatedValue(1);
  const {changeNetworkStatus, networkStatus} = useContext(AppStatusContext);
  useEffect(() => {
    const startPulse = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(heartBeatAnimation, {
            toValue: 1.3,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(heartBeatAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    startPulse();
  }, [heartBeatAnimation]);
  return (
    <View style={styles.body}>
      <View style={styles.indicatorContainer}>
        <Animated.View
          style={[
            {
              ...styles.stateIndicatorContainer,
              backgroundColor: networkStatus
                ? 'rgba(60, 179, 113, 0.3)'
                : 'rgba(255, 0, 0, 0.3)',
            },
            {
              transform: [
                {scaleX: heartBeatAnimation},
                {scaleY: heartBeatAnimation},
              ],
            },
          ]}>
          <View
            style={{
              ...styles.stateIndicator,
              backgroundColor: networkStatus ? '#3CB371' : 'red',
            }}></View>
        </Animated.View>
        <Text
          style={{
            ...styles.stateText,
            color: networkStatus ? '#3CB371' : 'red',
            marginLeft: 5,
          }}>
          {networkStatus ? 'Online' : 'offline'}
        </Text>
      </View>
    </View>
  );
};

export default OfflineOnline;

const styles = StyleSheet.create({
  body: {
    // borderWidth: 1,
    alignSelf: 'flex-end',
    marginRight: 20,
    flexDirection: 'row',
  },
  stateIndicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  stateText: {
    color: 'red',
    fontSize: 17,
    fontWeight: '600',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stateIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
    // borderWidth: 1,
    backgroundColor: 'rgba(60, 179, 113, 0.4)',
  },
});
