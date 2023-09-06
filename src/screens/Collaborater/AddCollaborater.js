import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Images, Layout, Colors, Fonts} from '../../theme';
import {useUserStore} from '../../zustand';
const AddCollaborater = ({addCollaboraterModal, changeStateOfModal}) => {
  const addCollaboraterStore = useUserStore(
    state => state.addCollaboraterStore,
  );
  const [email, setEmail] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={addCollaboraterModal}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
      }}>
      <View onPress={() => {}} style={styles.overlay}>
        <View style={styles.mainView}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>Invite Collaboraters</Text>
            <Text style={styles.descriptionStyle}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <View style={styles.textInputContainer}>
              <Text style={styles.descriptionStyle}>Name or Email</Text>
              <View style={styles.rowDirection}>
                <Image source={Images.smsIcon} />
                <TextInput
                  style={styles.textInputStyle}
                  onChangeText={setEmail}
                  value={email}
                  placeholder={'e.g John , john@gmail.com'}
                  placeholderTextColor={Colors.Primary.WHITE}
                />
              </View>
            </View>
            <Text style={styles.descriptionStyle}>
              This site is protected by reCAPTCHA and the Google{' '}
              <Text style={styles.underlineText}>Privacy Policy</Text>
              and <Text style={styles.underlineText}>
                Terms of Service
              </Text>{' '}
              apply.
            </Text>
            <View style={styles.buttonsRow}>
              <TouchableOpacity onPress={() => changeStateOfModal()}>
                <Text style={styles.descriptionStyle}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  addCollaboraterStore(email);
                  setEmail('');
                  changeStateOfModal();
                }}
                style={styles.AddButtonContainer}>
                <Text style={styles.descriptionStyle}>Add Collaborater</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddCollaborater;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    borderWidth: 1,
    paddingTop: Layout.SV_20,
    paddingLeft: Layout.SV_15,
    paddingRight: Layout.SV_15,
    paddingBottom: Layout.SV_20,
    backgroundColor: Colors.Primary.BLACK_2,
    // borderColor: Colors.Light_Grey,
    // height: Layout.SV_300,
    borderRadius: Layout.SV_20,

    // margin: Layout.SV_2,
  },
  titleStyle: {
    color: Colors.Primary.WHITE,
    fontFamily: Fonts.regular,
    fontSize: Layout.FSV_16,
  },
  descriptionStyle: {
    color: Colors.Primary.WHITE,
    fontFamily: Fonts.light,
    fontSize: Layout.FSV_11,
  },
  textInputContainer: {
    marginVertical: Layout.SV_10,
  },
  textInputStyle: {
    borderWidth: 0,
    padding: 0,
    // backgroundColor: 'red',
    paddingRight: Layout.SV_10,
    fontSize: Layout.FSV_12,
    color: Colors.Primary.WHITE,
    marginLeft: Layout.SV_10,
  },
  rowDirection: {
    flexDirection: 'row',
    marginVertical: Layout.SV_10,
    // justifyContent: 'center',
    paddingLeft: Layout.SV_20,
    alignItems: 'center',
    backgroundColor: Colors.Primary.BLACK_1,
    paddingVertical: Layout.SV_10,
    borderRadius: Layout.SV_10,
  },
  underlineText: {
    color: Colors.Primary.REGULAR,
    fontFamily: Fonts.light,
    fontSize: Layout.FSV_12,
    textDecorationLine: 'underline',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Layout.SV_40,
  },
  AddButtonContainer: {
    backgroundColor: Colors.Primary.BLUE,
    borderRadius: Layout.SV_20,
    padding: Layout.SV_10,
  },
});
