import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tenant } from '../../types/tenant';

interface Props {
  tenant: Tenant;
}

const TenantInfo: React.FC<Props> = ({ tenant }) => (
  <View style={styles.container}>
    <Text>{tenant.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default TenantInfo;
