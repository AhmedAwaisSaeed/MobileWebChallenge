import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Layout, Images, Colors} from '../../theme';
import FastImage from 'react-native-fast-image';

const CollaboraterGroup = ({collaboraters, changeStateOfModal}) => {
  const _renderItem = ({item, index}) => {
    const lastItem = index === collaboraters.length - 1 ? true : false;
    const {avatar} = item;
    console.log('avatar==', avatar);
    return (
      <>
        <TouchableOpacity style={[styles.rowContainer]}>
          <FastImage
            style={styles.avatarStyle}
            source={{
              uri: avatar,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        {lastItem && (
          <TouchableOpacity
            onPress={() => changeStateOfModal()}
            style={[styles.addContainer]}>
            <View style={styles.addImageStyle}>
              <FastImage
                style={styles.addIconStyle}
                source={Images.addIcon}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={collaboraters}
        renderItem={_renderItem}
        keyExtractor={item => item._id.toString()}
      />
    </View>
  );
};

export default CollaboraterGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
  },
  rowContainer: {
    paddingVertical: Layout.SV_5,
    // position: 'absolute',
    // paddingLeft: Layout.SV_50,
    // backgroundColor: 'red',
  },
  addContainer: {
    paddingVertical: Layout.SV_5,
    marginLeft: Layout.SV_10,
    justifyContent: 'center',
  },
  avatarStyle: {
    height: Layout.SV_30,
    width: Layout.SV_30,
    borderRadius: Layout.SV_30,
    resizeMode: 'contain',
    marginRight: -Layout.SV_5,
  },
  addImageStyle: {
    height: Layout.SV_25,
    width: Layout.SV_25,
    borderRadius: Layout.SV_25,
    backgroundColor: Colors.Primary.BLACK_3,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIconStyle: {
    height: Layout.SV_20,
    width: Layout.SV_20,
    borderRadius: Layout.SV_20,
  },
});
