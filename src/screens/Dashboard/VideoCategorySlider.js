import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Layout, Colors} from '../../theme';
import CategoryInfo from './CategoryInfo';
import {useUserStore} from '../../zustand';
const VideoCategorySlider = ({allVideoCategores}) => {
  const setPressedState = useUserStore(state => state.setPressedState);
  const setCurrentTab = useUserStore(state => state.setCurrentTab);

  const renderCategory = ({item, index}) => {
    return (
      <CategoryInfo
        item={item}
        index={index}
        setPressedState={setPressedState}
        setCurrentTab={setCurrentTab}
      />
    );
  };
  return (
    <View
      style={{
        height: Layout.SV_40,
        marginTop: Layout.SV_18,
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={allVideoCategores}
        renderItem={renderCategory}
        keyExtractor={item => String(item._id)}
        // extraData={}
      />
    </View>
  );
};

export default VideoCategorySlider;

const styles = StyleSheet.create({});
