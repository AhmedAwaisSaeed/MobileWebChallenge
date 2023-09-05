import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dashboard, Search, Folder, Collaborater, Setting} from '../screens';
import {CustomIcon} from '../components';
import {Colors} from '../theme';
const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor={Colors.Primary.REGULAR}
      inactiveColor={Colors.Primary.WHITE}
      shifting={true}
      barStyle={{backgroundColor: Colors.Primary.BLACK}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="homeIcon" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="searchIcon" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Folder"
        component={Folder}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="folderIcon" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Collaborater"
        component={Collaborater}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="profileIcon" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="settingIcon" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
