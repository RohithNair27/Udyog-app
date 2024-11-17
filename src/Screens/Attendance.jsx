import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useContext, useRef} from 'react';
import Button from '../components/Button';
import {launchCamera} from 'react-native-image-picker';
import {request, RESULTS, PERMISSIONS} from 'react-native-permissions';
import GetCurrentDay from '../utils/TimeUtils';
import {storeDataInAsync, getData} from '../utils/Storage';
import {uploadDataFireBase} from '../utils/Firebase';
import InputBox from '../components/InputBox';
import {DataContext} from '../context/DataContext/DataContext';
import AppStatusContext from '../context/AppStatusContext/AppStatusContext';
import MaleProfile from '../assets/Images/MaleProfile.svg';
import Icon from 'react-native-vector-icons/AntDesign';
import {LocalStorageMessages} from '../Constants/LocalStorageConstants';
const Attendance = ({navigation}) => {
  const {updateFarmHandList, farmHandDataList} = useContext(DataContext);
  const {changeNetworkStatus, changeLoadingStatus, loading, networkStatus} =
    useContext(AppStatusContext);
  const inInitialRender = useRef(true);
  const [checkPressed, setCheckPressed] = useState(false);
  const [waitingForUpload, setWaitingForUpload] = useState(false);
  const [Data, setData] = useState({
    LoginStatus: '',
    EmployeeIdEntered: '',
    Date: '',
    Day: '',
    ImageUrl: '',
    Time: null,
    month: '',
    year: '',
  });
  const [EmployeeId, setEmployeeID] = useState('');

  const [profilePictureUri, setProfilePictureUri] = useState(false);
  // const [imageBase64, setImageBase64] = useState(false);

  const changeNetworkMode = () => {
    console.log('pressed');
    // setnewtworkState(!newtworkState);
  };

  const handleValueChange = (key, changed) => {
    setEmployeeID(changed);
    // Data.EmployeeIdEntered(changed);
  };

  const Alerts = (text1, text2) =>
    Alert.alert(text1, text2, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  //Andriod permission
  const getMobilePermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);
      if (result === RESULTS.GRANTED) {
        console.log('You can use the camera');
        getProfilePictureDevice();
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.error(error);
    }
  };

  //This is used to take image from camera
  const getProfilePictureDevice = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('image not picked');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets?.[0]?.uri;
        setProfilePictureUri(imageUri);
      }
    });
  };

  const SendDataToFirebase = async () => {
    const storageData = await getData();
    const currentDate = GetCurrentDay().date;
    const currentMonth = GetCurrentDay().month;
    const currentYear = GetCurrentDay().year;
    const stringDocument = JSON.stringify(
      currentDate + '-' + currentMonth + '-' + currentYear,
    );

    storageData.map(async data => {
      setWaitingForUpload(true);
      const returned = await uploadDataFireBase(data, 1234, stringDocument);
      if (returned === 'UPDATED') {
        setWaitingForUpload(false);
      }
    });
  };

  //CheckIn
  const onClickCheckIn = () => {
    setData({
      LoginStatus: 'check In',
      Date: GetCurrentDay().date,
      Day: GetCurrentDay().abbreviation,
      ImageUrl: profilePictureUri,
      Time: GetCurrentDay().hours,
      EmployeeIdEntered: EmployeeId,
      month: GetCurrentDay().month,
      year: GetCurrentDay().year,
    });
    setCheckPressed(!checkPressed);
  };

  const onClickCheckOut = () => {
    setData({
      LoginStatus: 'Check Out',
      Date: GetCurrentDay().date,
      Day: GetCurrentDay().abbreviation,
      ImageUrl: profilePictureUri,
      Time: GetCurrentDay().hours,
      EmployeeIdEntered: EmployeeId,
      month: GetCurrentDay().month,
      year: GetCurrentDay().year,
      // image: imageBase64,
    });
    setCheckPressed(!checkPressed);
  };

  const handleNavigation = uri => {
    console.log(uri);
    navigation.navigate('PictureView', {uri});
  };

  //Stores the data in local storage
  const storeInAsync = async () => {
    const localStorageMessage = await storeDataInAsync(Data);

    // setting the local Data state to intial
    setData({
      LoginStatus: '',
      EmployeeIdEntered: '',
      Date: '',
      Day: '',
      ImageUrl: '',
      Time: null,
      month: '',
      year: '',
    });
    setProfilePictureUri(false);
    setEmployeeID('');
    // if (localStorageMessage === LocalStorageMessages.success.CHECK_IN) {

    // }
    // else (localStorageMessage === LocalStorageMessages.error.CHECK_IN_ALREADY_COMPLETED){

    // }
    // if (
    //   reply !== 'Already checked out for the day ' &&
    //   reply !== LocalStorageMessages.error.CHECK_IN_ALREADY_COMPLETED
    // ) {
    // } else {
    //   if (
    //     reply !== 'Already checked out for the day ' &&
    //     reply !== LocalStorageMessages.error.CHECK_IN_ALREADY_COMPLETED
    //   ) {
    //     Alerts(
    //       'Info',
    //       'Switched to offline mode Please switch it back on to get the data stored',
    //     );
    //   } else {
    //     Alerts('Error', reply);
    //   }
    // }
  };

  // useEffect(() => {
  //   if (!inInitialRender.current) {
  //     if (Data.ImageUrl === ('' || false) || Data.EmployeeIdEntered === '') {
  //       Alerts('Incomplete!', 'Please Add Image and EmployeeId');
  //     } else {
  //       storeInAsync();
  //     }
  //   }
  // }, [checkPressed]);

  useEffect(() => {
    inInitialRender.current = false;
  }, []);

  useEffect(() => {
    if (!inInitialRender.current) {
      storeInAsync();
    }
  }, []);
  return (
    <View style={styles.Body}>
      <StatusBar backgroundColor={'#FFC834'} />
      {/* <View style={styles.header}>
        <Modal
          isVisible={waitingForUpload}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          animationInTiming={400}>
          <View style={styles.waitingModalStyle}>
            <ActivityIndicator size={60} />
          </View>
        </Modal>
      </View> */}
      <View style={styles.ImageBody}>
        <View style={styles.ImageBodyContainer}>
          <Text style={styles.ImageBodyHeaderText}>मेहनत से सफलता।</Text>
          <Text style={styles.workersDataInfoText}>Check today's updates</Text>
        </View>

        {profilePictureUri === false ? (
          <View style={styles.workersDataContainer}>
            <View style={styles.workersData}>
              <Text style={styles.workersDataHeaderText}>0</Text>
              <Text style={styles.workersDataInfoText}>People working</Text>
            </View>
          </View>
        ) : (
          <MaleProfile />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.workersDataInfoText}>Today, Dec 28</Text>
        <InputBox
          placeHolder={'Enter your employee id'}
          value={EmployeeId}
          onValueChange={handleValueChange}
          keyBoardType={'tel'}
          maxLength={6}
          width={'80%'}
          height={'15%'}
          backGroundColor={'#f4f4f4'}
          paddingLeft={20}
        />
        <TouchableOpacity
          style={styles.pictureButton}
          onPress={getMobilePermission}>
          <Icon name="camera" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.checkInButtonContainer}>
          <Button
            placeHolder="Check In"
            backGroundColor={'#7C0A02'}
            onPress={onClickCheckIn}
            // ImageProps="login"
            width={'45%'}
            height={'100%'}
          />

          <Button
            placeHolder="Check Out"
            backGroundColor={'#7C0A02'}
            onPress={onClickCheckOut}
            // ImageProps="logout"
            width={'45%'}
            height={'100%'}
          />
        </View>
      </View>
    </View>
  );
};

export default Attendance;
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  Body: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
  },
  ImageBody: {
    height: '45%',
    width: '100%',
    backgroundColor: '#FFC834',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBodyContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  ImageBodyHeaderText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '600',
  },

  headerText: {
    color: 'black',
    fontSize: 23,
    fontWeight: '900',
  },
  checkInContainer: {
    height: '30%',
    width: '85%',
    borderRadius: 20,
    borderColor: '#05aaf7',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  workersDataContainer: {
    width: '80%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workersData: {
    borderWidth: 3,
    borderColor: 'white',
    width: 170,
    height: 170,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workersDataHeaderText: {
    color: '#000',
    fontSize: 40,
    fontWeight: '600',
  },
  workersDataInfoText: {
    color: '#000',
    // fontSize: 40,
    // fontWeight: '600',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pictureButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#FFC834',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkInButtonContainer: {
    // borderWidth: 1,
    justifyContent: 'space-between',
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: '15%',
  },
});
