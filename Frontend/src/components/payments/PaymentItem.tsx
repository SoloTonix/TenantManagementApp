import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Payment } from '../../types/payment';

interface Props {
  payment: Payment;
}

const PaymentItem: React.FC<Props> = ({ payment }) => (
  <View style={styles.item}>
    <Text>{payment.amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {},
});

export default PaymentItem;
