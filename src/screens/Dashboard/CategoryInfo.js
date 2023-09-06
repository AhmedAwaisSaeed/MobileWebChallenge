import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Layout, Colors, Fonts} from '../../theme';

const CategoryInfo = ({item, index, setPressedState, setCurrentTab}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (!item.pressed) {
          setPressedState(index);
          setCurrentTab(index);
        } else {
        }
      }}
      style={[
        styles.container,
        {
          backgroundColor: item.pressed
            ? Colors.Primary.BLUE
            : Colors.Primary.BLACK,
          borderColor: item.pressed
            ? Colors.Primary.BLUE
            : Colors.Primary.GREY_10,
        },
      ]}>
      <Text
        style={[
          styles.textStyle,
          {color: item.pressed ? Colors.Primary.WHITE : Colors.Primary.GREY_10},
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Layout.SV_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Primary.GREY,
    borderRadius: Layout.SV_10,
    margin: Layout.SV_5,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: Layout.FSV_12,
    fontFamily: Fonts.regular,
  },
});
