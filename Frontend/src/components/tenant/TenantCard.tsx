import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tenant } from '../../types/tenant';

interface Props {
  tenant: Tenant;
}

const TenantCard: React.FC<Props> = ({ tenant }) => (
  <View style={styles.card}>
    <Text>{tenant.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {},
});

export default TenantCard;
