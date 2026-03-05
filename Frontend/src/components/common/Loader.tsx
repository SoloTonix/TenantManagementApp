import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default Loader;
