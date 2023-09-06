import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useUserStore} from '../../zustand';
import {TopBar} from '../../components';
import {Images, Layout, Colors, Fonts} from '../../theme';
import AddCollaborater from '../Collaborater/AddCollaborater';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
const ProjectDetail = ({navigation, route}) => {
  const {video} = route.params;
  const userInformation = useUserStore(state => state.userInformation);
  const {collaboraters, avatar} = userInformation;
  const [addCollaboraterModal, setAddCollaboraterModal] = useState(false);

  const changeStateOfModal = () => {
    setAddCollaboraterModal(!addCollaboraterModal);
  };
  console.log('User information===', userInformation);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <AddCollaborater
          changeStateOfModal={changeStateOfModal}
          addCollaboraterModal={addCollaboraterModal}
        />

        <View style={styles.videoSection}>
          <FastImage
            style={styles.thumbnailStyle}
            source={{
              uri: video.thumbnail,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={styles.topBarRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={Images.backIcon} />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <TopBar
              collaboraters={collaboraters}
              changeStateOfModal={changeStateOfModal}
              userAvatar={avatar}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProjectDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary.BLACK,
    paddingHorizontal: Layout.SV_5,
  },
  textStyle: {
    color: Colors.Primary.REGULAR,
    fontFamily: Fonts.light,
    fontSize: Layout.FSV_10,
  },
  timeStyle: {
    color: Colors.Primary.WHITE,
    fontFamily: Fonts.semiBold,
    fontSize: Layout.FSV_32,
  },
  dayStyle: {
    color: Colors.Primary.PINK,
    fontFamily: Fonts.regular,
    fontSize: Layout.FSV_20,
    marginTop: -Layout.SV_12,
  },
  cardsContainer: {
    flex: 1,
    marginBottom: Layout.SV_40,
    marginTop: Layout.SV_20,
  },
  videosContainer: {
    flex: 1,
    backgroundColor: Colors.Primary.REGULARTHREE,
    borderRadius: Layout.SV_20,
    position: 'absolute',
    top: '50%',
    left: 30,
    bottom: 8,
    right: 30,
  },
  videosContainerTwo: {
    flex: 1,
    position: 'absolute',
    backgroundColor: Colors.Primary.REGULARTWO,
    top: '50%',
    left: 20,
    bottom: 14,
    right: 20,
    borderRadius: Layout.SV_20,
  },
  videosContainerThree: {
    flex: 1,
    position: 'absolute',
    backgroundColor: Colors.Primary.REGULAR,
    top: 0,
    left: 0,
    bottom: 20,
    right: 0,
    borderRadius: Layout.SV_20,
    padding: Layout.SV_20,
  },
  videoSection: {
    // flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    // marginVertical: Layout.SV_20,
    backgroundColor: 'orange',
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
  thumbnailStyle: {
    height: '100%',
    width: '100%',
    // height: Layout.SV_70,
    // width: Layout.SV_70,

    // resizeMode: 'cover',
  },
  backButton: {
    width: Layout.SV_30,
    height: Layout.SV_30,
    backgroundColor: Colors.Primary.BLACK_1,
    borderRadius: Layout.SV_30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: '8%',
    right: '8%',
  },
});
