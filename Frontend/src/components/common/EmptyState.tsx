import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyState: React.FC = () => (
  <View style={styles.container}>
    <Text>No data available</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default EmptyState;
