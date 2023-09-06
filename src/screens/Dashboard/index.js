import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {useUserStore} from '../../zustand';
import {TopBar} from '../../components';
import {Layout, Colors, Fonts} from '../../theme';
import moment from 'moment';
import AddCollaborater from '../Collaborater/AddCollaborater';
import CollaboraterGroup from '../Collaborater/CollaboraterGroup';
import VideoCategorySlider from './VideoCategorySlider';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
const Dashboard = ({navigation}) => {
  const userInformation = useUserStore(state => state.userInformation);
  const allVideoCategores = useUserStore(state => state.allVideoCategores);
  const currentTab = useUserStore(state => state.currentTab);
  const {collaboraters, avatar} = userInformation;
  const [addCollaboraterModal, setAddCollaboraterModal] = useState(false);

  const showRecentVideos = currentTab === 0 ? true : false;

  const changeStateOfModal = () => {
    setAddCollaboraterModal(!addCollaboraterModal);
  };
  console.log('User information===', userInformation);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar hidden />
        <AddCollaborater
          changeStateOfModal={changeStateOfModal}
          addCollaboraterModal={addCollaboraterModal}
        />
        <TopBar
          collaboraters={collaboraters}
          changeStateOfModal={changeStateOfModal}
          userAvatar={avatar}
        />
        <Text style={styles.textStyle}>Your recent videos</Text>
        <Text style={styles.timeStyle}>{moment().format('hh:mm')}</Text>
        <Text style={styles.dayStyle}>{moment().format('dddd')}</Text>
        <VideoCategorySlider allVideoCategores={allVideoCategores} />
        {showRecentVideos && (
          <View style={styles.cardsContainer}>
            <View style={styles.videosContainer} />
            <View style={styles.videosContainerTwo} />
            <View style={styles.videosContainerThree}>
              <CollaboraterGroup
                collaboraters={collaboraters.slice(-3)}
                changeStateOfModal={changeStateOfModal}
              />
              <View style={styles.videoSection}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProjectDetail', {
                      video: userInformation.videos[0],
                    })
                  }>
                  <FastImage
                    style={styles.thumbnailStyle}
                    source={{
                      uri: userInformation.videos[0].thumbnail,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.descriptionStyle}>Ads Video Editor</Text>
                  <Text style={styles.titleStyle}>First Project</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Layout.SV_20,
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
    height: Layout.SV_70,
    width: Layout.SV_70,
    borderRadius: Layout.SV_10,
    resizeMode: 'contain',
    marginRight: Layout.SV_15,
  },
});
