import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Property } from '../../types/property';

interface Props {
  unit: Property;
}

const UnitCard: React.FC<Props> = ({ unit }) => (
  <View style={styles.card}>
    <Text>{unit.address}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {},
});

export default UnitCard;
