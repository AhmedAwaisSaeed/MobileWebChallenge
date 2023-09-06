import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useUserStore} from '../../zustand';
import {TopBar} from '../../components';
import {Images, Layout, Colors, Fonts} from '../../theme';
import AddCollaborater from '../Collaborater/AddCollaborater';
import CollaboraterInfo from './CollaboraterInfo';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
const Collaborater = ({navigation}) => {
  const userInformation = useUserStore(state => state.userInformation);
  const deleteCollaboraterStore = useUserStore(
    state => state.deleteCollaboraterStore,
  );
  const {collaboraters, avatar} = userInformation;
  const [addCollaboraterModal, setAddCollaboraterModal] = useState(false);

  const changeStateOfModal = () => {
    setAddCollaboraterModal(!addCollaboraterModal);
  };

  let row = [];
  let prevOpenedRow;

  const renderItem = ({item, index}, onClick) => {
    const closeRow = () => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <TouchableHighlight onPress={onClick} style={styles.trashIconContainer}>
          <Image source={Images.trashIcon} style={styles.trashIconStyle} />
        </TouchableHighlight>
      );
    };
    return (
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={(progress, dragX) =>
            renderRightActions(progress, dragX, onClick)
          }
          onSwipeableOpen={() => closeRow(index)}
          ref={ref => (row[index] = ref)}
          rightOpenValue={-100}>
          <CollaboraterInfo item={item} />
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <AddCollaborater
          changeStateOfModal={changeStateOfModal}
          addCollaboraterModal={addCollaboraterModal}
        />
        <TopBar
          collaboraters={collaboraters}
          changeStateOfModal={changeStateOfModal}
          userAvatar={avatar}
        />
        <View style={styles.flatlistContainer}>
          <FlatList
            data={userInformation.collaboraters}
            renderItem={data =>
              renderItem(data, () => {
                const {item} = data;
                console.log('Pressed', item._id);
                deleteCollaboraterStore(item._id);
              })
            }
            keyExtractor={item => item._id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Collaborater;

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
  flatlistContainer: {
    flex: 1,
  },
  trashIconContainer: {
    margin: 0,
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
    backgroundColor: Colors.Primary.RED,
  },
  trashIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
