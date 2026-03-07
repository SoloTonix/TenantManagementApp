import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import colors from '../../../constants/colors';

const screenWidth = Dimensions.get('window').width;

const revenueData = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun'],
  datasets: [
    {
      data: [1200000,1500000,1100000,1800000,1600000,2000000]
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0,123,255,${opacity})`,
  labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
  strokeWidth: 2,
  decimalPlaces: 0
};

export default function LandlordDashboard() {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back</Text>
        <Text style={styles.name}>Landlord</Text>
      </View>


      {/* PORTFOLIO BALANCE CARD */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Portfolio Revenue</Text>
        <Text style={styles.balance}>₦4,600,000</Text>

        <View style={styles.balanceRow}>
          <View>
            <Text style={styles.balanceSmallLabel}>Collected</Text>
            <Text style={styles.balanceSmall}>₦3.8M</Text>
          </View>

          <View>
            <Text style={styles.balanceSmallLabel}>Outstanding</Text>
            <Text style={styles.balanceSmall}>₦800K</Text>
          </View>
        </View>
      </View>


      {/* QUICK STATS */}
      <Text style={styles.sectionTitle}>Portfolio</Text>

      <View style={styles.statsRow}>

        <View style={styles.statCard}>
          <MaterialCommunityIcons
            name="office-building"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Properties</Text>
        </View>

        <View style={styles.statCard}>
          <MaterialCommunityIcons
            name="account-group"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.statNumber}>34</Text>
          <Text style={styles.statLabel}>Tenants</Text>
        </View>

        <View style={styles.statCard}>
          <MaterialCommunityIcons
            name="home-percent"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.statNumber}>87%</Text>
          <Text style={styles.statLabel}>Occupancy</Text>
        </View>

      </View>


      {/* REVENUE CHART */}
      <Text style={styles.sectionTitle}>Revenue Trend</Text>

      <LineChart
        data={revenueData}
        width={screenWidth - 40}
        height={200}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />


      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsRow}>

        <TouchableOpacity style={styles.actionCard}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.actionText}>Record Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <MaterialCommunityIcons
            name="account-plus"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.actionText}>Add Tenant</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <MaterialCommunityIcons
            name="home-plus"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.actionText}>Add Property</Text>
        </TouchableOpacity>

      </View>


      {/* ALERTS */}
      <Text style={styles.sectionTitle}>Alerts</Text>

      <View style={styles.alertCard}>
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={22}
          color={colors.error}
        />
        <Text style={styles.alertText}>
          3 tenants have overdue rent payments
        </Text>
      </View>

      <View style={styles.alertCard}>
        <MaterialCommunityIcons
          name="home-alert-outline"
          size={22}
          color={colors.warning}
        />
        <Text style={styles.alertText}>
          2 units are currently vacant
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.backgroundLight,
    padding:20
  },

  header:{
    marginBottom:20
  },

  greeting:{
    fontSize:16,
    color:colors.textSecondary
  },

  name:{
    fontSize:24,
    fontWeight:'bold',
    color:colors.textPrimary
  },


  balanceCard:{
    backgroundColor:colors.primary,
    borderRadius:16,
    padding:20,
    marginBottom:30
  },

  balanceLabel:{
    color:'#ffffffaa',
    marginBottom:8
  },

  balance:{
    fontSize:28,
    fontWeight:'bold',
    color:'#fff',
    marginBottom:16
  },

  balanceRow:{
    flexDirection:'row',
    justifyContent:'space-between'
  },

  balanceSmallLabel:{
    color:'#ffffffaa',
    fontSize:12
  },

  balanceSmall:{
    color:'#fff',
    fontWeight:'600'
  },


  sectionTitle:{
    fontSize:18,
    fontWeight:'600',
    marginBottom:12,
    color:colors.textPrimary
  },


  statsRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:25
  },

  statCard:{
    backgroundColor:'#fff',
    width:'30%',
    borderRadius:12,
    padding:16,
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.border
  },

  statNumber:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:6
  },

  statLabel:{
    fontSize:12,
    color:colors.textSecondary
  },


  chart:{
    borderRadius:12,
    marginBottom:25
  },


  actionsRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:25
  },

  actionCard:{
    backgroundColor:'#fff',
    width:'30%',
    padding:16,
    borderRadius:12,
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.border
  },

  actionText:{
    marginTop:6,
    fontSize:12,
    fontWeight:'600'
  },


  alertCard:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    padding:16,
    borderRadius:12,
    marginBottom:12,
    borderWidth:1,
    borderColor:colors.border
  },

  alertText:{
    marginLeft:10,
    color:colors.textPrimary
  }

});