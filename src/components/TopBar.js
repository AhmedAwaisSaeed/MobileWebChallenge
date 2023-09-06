import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import CollaboraterGroup from '../screens/Collaborater/CollaboraterGroup';
import {Images, Layout, Colors} from '../theme';
import FastImage from 'react-native-fast-image';

const TopBar = ({collaboraters, userAvatar, changeStateOfModal}) => {
  console.log('collaboraters Array==', collaboraters, userAvatar);
  return (
    <View style={styles.container}>
      <View style={styles.columnOne}>
        <CollaboraterGroup
          collaboraters={collaboraters.slice(-3)}
          changeStateOfModal={changeStateOfModal}
        />
      </View>
      <View style={styles.coulumnTwo}>
        <Image source={Images.notificationIcon} />
      </View>
      <View style={styles.columnThree}>
        <FastImage
          style={styles.avatarStyle}
          source={{
            uri: userAvatar,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    padding: Layout.SV_10,
    // backgroundColor: 'black',
    alignItems: 'center',
  },
  columnOne: {
    flex: 1,
  },
  coulumnTwo: {},
  columnThree: {
    marginLeft: Layout.SV_10,
  },
  avatarStyle: {
    height: Layout.SV_30,
    width: Layout.SV_30,
    borderRadius: Layout.SV_30,
    resizeMode: 'contain',
  },
});
