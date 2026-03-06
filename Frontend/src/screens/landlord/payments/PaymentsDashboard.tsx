// src/screens/landlord/payments/PaymentsDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import { LineChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Dummy payment data
const recentPayments = [
  { id: '1', tenant: 'John Doe', property: 'Sunset Apartments', amount: 500000, status: 'paid' },
  { id: '2', tenant: 'Jane Smith', property: 'Greenwood Villas', amount: 350000, status: 'pending' },
  { id: '3', tenant: 'David Lee', property: 'Riverside Flats', amount: 400000, status: 'overdue' },
];

// Dummy chart data
const monthlyCollectionData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{ data: [1200000, 1500000, 1100000, 1800000, 1600000, 1900000] }],
};

// Chart configuration for LineChart
const chartConfig = {
  backgroundGradientFrom: colors.backgroundLight,
  backgroundGradientTo: colors.backgroundLight,
  color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  decimalPlaces: 0,
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: colors.primary,
  },
};

// Pie chart data - properly formatted for PieChart component
const pieData = [
  {
    name: 'Paid',
    population: 1500000,
    color: colors.accent,
    legendFontColor: colors.textPrimary,
    legendFontSize: 12
  },
  {
    name: 'Pending',
    population: 350000,
    color: colors.warning,
    legendFontColor: colors.textPrimary,
    legendFontSize: 12
  },
  {
    name: 'Overdue',
    population: 400000,
    color: colors.error,
    legendFontColor: colors.textPrimary,
    legendFontSize: 12
  },
];

export default function PaymentsDashboard({ navigation }: any) {
  const renderRecentPayment = ({ item }: any) => {
    // Safely access item properties
    if (!item) return null;
    
    let statusColor = colors.textSecondary;
    if (item.status === 'paid') statusColor = colors.accent;
    if (item.status === 'pending') statusColor = colors.warning;
    if (item.status === 'overdue') statusColor = colors.error;

    return (
      <View style={styles.paymentCard}>
        <View style={styles.paymentHeader}>
          <Text style={styles.tenant}>{item.tenant || ''}</Text>
          <Text style={[styles.status, { color: statusColor }]}>{(item.status || '').toUpperCase()}</Text>
        </View>
        <Text style={styles.property}>{item.property || ''}</Text>
        <Text style={styles.amount}>₦{(item.amount || 0).toLocaleString()}</Text>
      </View>
    );
  };

  const renderHeader = () => (
    <>
      {/* Title */}
      <Text style={styles.title}>Payments Dashboard</Text>

      {/* 1. Summary Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.summaryScroll}>
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
      </ScrollView>

      {/* 2. Charts Section */}
      <Text style={styles.sectionTitle}>Insights</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        <LineChart
          data={monthlyCollectionData}
          width={screenWidth * 0.8}
          height={180}
          chartConfig={chartConfig}
          bezier
          style={{ borderRadius: 12, marginRight: 16 }}
        />

        <PieChart
          data={pieData}
          width={screenWidth * 0.8}
          height={180}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={{ borderRadius: 12 }}
        />
      </ScrollView>

      {/* 3. Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        <TouchableOpacity style={styles.quickActionButton}>
          <MaterialCommunityIcons name="cash-plus" size={24} color={colors.primary} />
          <Text style={styles.quickActionText}>Record Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <MaterialCommunityIcons name="file-document-outline" size={24} color={colors.primary} />
          <Text style={styles.quickActionText}>Generate Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <MaterialCommunityIcons name="bell-outline" size={24} color={colors.primary} />
          <Text style={styles.quickActionText}>Send Reminder</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Recent Payments</Text>
    </>
  );

  return (
    <FlatList
      data={recentPayments}
      keyExtractor={(item) => item.id}
      renderItem={renderRecentPayment}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor: colors.backgroundLight },
  title:{ fontSize:24, fontWeight:'bold', color: colors.textPrimary, marginBottom: 20 },
  summaryScroll:{ marginBottom: 20 },
  summaryCard:{
    width:140,
    borderRadius:12,
    padding:16,
    alignItems:'center',
    justifyContent:'center',
    marginRight:12,
    shadowColor: colors.shadow,
    shadowOpacity:0.05,
    shadowRadius:6,
    elevation:2
  },
  summaryAmount:{ fontSize:16, fontWeight:'bold', color: colors.textInverse, marginBottom:4 },
  summaryLabel:{ fontSize:12, color: colors.textInverse, textAlign:'center' },
  sectionTitle:{ fontSize:18, fontWeight:'600', marginBottom:12, color: colors.textPrimary },
  quickActionButton:{
    width:120,
    padding:16,
    borderRadius:12,
    backgroundColor: '#f5f5f5',
    alignItems:'center',
    marginRight:12,
    shadowColor: colors.shadow,
    shadowOpacity:0.05,
    shadowRadius:6,
    elevation:2
  },
  quickActionText:{ marginTop:6, fontSize:12, fontWeight:'600', color: colors.textPrimary, textAlign:'center' },
  paymentCard:{
    backgroundColor:'#fff',
    borderRadius:12,
    padding:16,
    marginBottom:15,
    borderWidth:1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity:0.05,
    shadowRadius:6,
    elevation:2
  },
  paymentHeader:{ flexDirection:'row', justifyContent:'space-between', marginBottom:6 },
  tenant:{ fontSize:16, fontWeight:'600', color: colors.textPrimary },
  status:{ fontSize:12, fontWeight:'600' },
  property:{ fontSize:14, color: colors.textSecondary, marginBottom:6 },
  amount:{ fontWeight:'600', color: colors.textPrimary }
});