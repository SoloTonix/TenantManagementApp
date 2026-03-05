// src/screens/landlord/payments/PaymentsDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors';

// Dummy payment data
const recentPayments = [
  { id: '1', tenant: 'John Doe', property: 'Sunset Apartments', amount: 500000, status: 'paid' },
  { id: '2', tenant: 'Jane Smith', property: 'Greenwood Villas', amount: 350000, status: 'pending' },
  { id: '3', tenant: 'David Lee', property: 'Riverside Flats', amount: 400000, status: 'overdue' },
];

export default function PaymentsDashboard({ navigation }: any){

  const renderRecentPayment = ({ item }: any) => {
    let statusColor = colors.textSecondary;
    if(item.status === 'paid') statusColor = colors.accent;
    if(item.status === 'pending') statusColor = colors.warning;
    if(item.status === 'overdue') statusColor = colors.error;

    return (
      <View style={styles.paymentCard}>
        <View style={styles.paymentHeader}>
          <Text style={styles.tenant}>{item.tenant}</Text>
          <Text style={[styles.status, { color: statusColor }]}>{item.status.toUpperCase()}</Text>
        </View>
        <Text style={styles.property}>{item.property}</Text>
        <Text style={styles.amount}>₦{item.amount.toLocaleString()}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Payments Dashboard</Text>
      </View>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={[styles.summaryCard, { backgroundColor: colors.primary }]}>
          <Text style={styles.summaryAmount}>₦1.5M</Text>
          <Text style={styles.summaryLabel}>Total Collected</Text>
        </View>
        <View style={[styles.summaryCard, { backgroundColor: colors.warning }]}>
          <Text style={styles.summaryAmount}>₦350K</Text>
          <Text style={styles.summaryLabel}>Pending</Text>
        </View>
        <View style={[styles.summaryCard, { backgroundColor: colors.error }]}>
          <Text style={styles.summaryAmount}>₦400K</Text>
          <Text style={styles.summaryLabel}>Overdue</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.primary }]}>
          <MaterialCommunityIcons name="cash-plus" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Record Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.secondary }]}>
          <MaterialCommunityIcons name="file-document-outline" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Generate Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.accent }]}>
          <MaterialCommunityIcons name="bell-outline" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Send Reminder</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Payments */}
      <Text style={styles.sectionTitle}>Recent Payments</Text>
      <FlatList
        data={recentPayments}
        keyExtractor={(item) => item.id}
        renderItem={renderRecentPayment}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.backgroundLight,
    padding:20
  },

  header:{
    marginBottom:20
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color: colors.textPrimary
  },

  summaryContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:25
  },

  summaryCard:{
    flex:1,
    marginHorizontal:4,
    borderRadius:12,
    padding:16,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: colors.shadow,
    shadowOpacity:0.05,
    shadowRadius:6,
    elevation:2
  },

  summaryAmount:{
    fontSize:18,
    fontWeight:'bold',
    color: colors.textInverse,
    marginBottom:4
  },

  summaryLabel:{
    fontSize:12,
    color: colors.textInverse
  },

  sectionTitle:{
    fontSize:18,
    fontWeight:'600',
    marginBottom:12,
    color: colors.textPrimary
  },

  actionsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:25
  },

  actionButton:{
    padding:15,
    borderRadius:12,
    alignItems:'center',
    width:'30%',
    shadowColor: colors.shadow,
    shadowOpacity:0.05,
    shadowRadius:6,
    elevation:2
  },

  actionText:{
    fontSize:12,
    marginTop:6,
    fontWeight:'600'
  },

  paymentCard:{
    backgroundColor:'#fff',
    borderRadius:0,
    padding:16,
    marginBottom:15,
    borderWidth:1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity:0.05,
    shadowRadius:6,
    elevation:2
  },

  paymentHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:6
  },

  tenant:{
    fontSize:16,
    fontWeight:'600',
    color: colors.textPrimary
  },

  status:{
    fontSize:12,
    fontWeight:'600'
  },

  property:{
    fontSize:14,
    color: colors.textSecondary,
    marginBottom:6
  },

  amount:{
    fontWeight:'600',
    color: colors.textPrimary
  }
});

