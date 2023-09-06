import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images, Layout, Colors, Fonts} from '../../theme';
import FastImage from 'react-native-fast-image';
const CollaboraterInfo = ({item}) => {
  const {name, email, avatar} = item;
  return (
    <TouchableOpacity style={styles.conainer}>
      <View>
        <FastImage
          style={styles.avatarStyle}
          source={{
            uri: avatar,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.textColumn}>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.descriptionStyle}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CollaboraterInfo;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    flexDirection: 'row',
    padding: Layout.SV_15,
    borderBottomWidth: 1,
    borderColor: Colors.Primary.GREY_8,
    marginHorizontal: Layout.SV_10,
  },
  titleStyle: {
    color: Colors.Primary.WHITE,
    fontFamily: Fonts.semiBold,
    fontSize: Layout.FSV_14,
  },
  descriptionStyle: {
    color: Colors.Primary.WHITE,
    fontFamily: Fonts.light,
    fontSize: Layout.FSV_9,
  },
  avatarStyle: {
    height: Layout.SV_40,
    width: Layout.SV_40,
    borderRadius: Layout.SV_40,
  },
  textColumn: {
    marginLeft: Layout.SV_10,
  },
});
