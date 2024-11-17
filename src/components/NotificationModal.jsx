import React, {useEffect, useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import Success from '../assets/Images/Success.svg';
const NotificationModal = ({messageType, message, onClose}) => {
  const [isVisible, setIsVisible] = useState(true);
  const modalColor = messageType === 'error' ? 'red' : 'green';

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }, []);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      //   onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContainer]}>
          <Success />
          <View>
            <Text style={[styles.messageText, {fontSize: 30, color: 'green'}]}>
              Success!
            </Text>
            <Text style={[styles.messageText, {marginTop: 10}]}>
              You have successfully checked in for today. Let’s get to work!
            </Text>
            {/* <View style={styles.modalTextContainer}>
              <Text style={styles.messageText}>Id:120392</Text>
              <Text style={styles.messageText}>Logged in at:10:30</Text>
              <Text style={styles.messageText}>Logged out at:10:30</Text>
            </View> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '70%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  messageText: {
    color: 'black',

    textAlign: 'center',
  },
  closeButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  modalTextContainer: {
    borderWidth: 1,
    alignItems: 'flex-start',
  },
});

export default NotificationModal;
