import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useUserStore} from '../../zustand';
import {TopBar} from '../../components';
const Dashboard = () => {
  const userInformation = useUserStore(state => state.userInformation);
  const {collaboraters, avatar} = userInformation;
  console.log('User information===', userInformation);
  return (
    <View style={styles.container}>
      <TopBar collaboraters={collaboraters} userAvatar={avatar} />
      <Text>DashBoard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
