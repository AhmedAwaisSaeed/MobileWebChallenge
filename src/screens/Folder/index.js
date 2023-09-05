import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Folder = () => {
  return (
    <View style={styles.container}>
      <Text>Folder</Text>
    </View>
  );
};

export default Folder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
