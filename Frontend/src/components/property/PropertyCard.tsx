import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Property } from '../../types/property';

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => (
  <View style={styles.card}>
    <Text>{property.address}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {},
});

export default PropertyCard;
