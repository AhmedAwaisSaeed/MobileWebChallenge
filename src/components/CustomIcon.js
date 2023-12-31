import React from 'react';
import {View, Text, Image} from 'react-native';
import {Images} from '../theme';

const CustomIcon = ({name, color}) => (
  <View>
    <Image source={Images[name]} style={{tintColor: color}} />
  </View>
);
export default CustomIcon;
