import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

export default function PropertyDetailScreen({ route, navigation }: any) {

  const { propertyId } = route.params;

  return (
    <ScrollView style={styles.container}>

      {/* Property Header */}
      <View style={styles.header}>
        <Text style={styles.propertyName}>Sunset Apartments</Text>
        <Text style={styles.propertyLocation}>Lekki, Lagos</Text>
      </View>

      {/* Property Stats */}
      <View style={styles.statsContainer}>

        <View style={styles.statCard}>
          <MaterialCommunityIcons name="home-city-outline" size={26} color={colors.primary} />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Units</Text>
        </View>

        <View style={styles.statCard}>
          <MaterialCommunityIcons name="account-group-outline" size={26} color={colors.primary} />
          <Text style={styles.statNumber}>9</Text>
          <Text style={styles.statLabel}>Occupied</Text>
        </View>

        <View style={styles.statCard}>
          <MaterialCommunityIcons name="cash" size={26} color={colors.primary} />
          <Text style={styles.statNumber}>₦850K</Text>
          <Text style={styles.statLabel}>Monthly Rent</Text>
        </View>

      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsContainer}>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="plus-circle-outline" size={24} color={colors.primary} />
          <Text style={styles.actionText}>Add Unit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="account-plus-outline" size={24} color={colors.primary} />
          <Text style={styles.actionText}>Add Tenant</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="cash-plus" size={24} color={colors.accent} />
          <Text style={styles.actionText}>Record Payment</Text>
        </TouchableOpacity>

      </View>

      {/* Units Section */}
      <Text style={styles.sectionTitle}>Units</Text>

      <View style={styles.unitCard}>
        <View>
          <Text style={styles.unitName}>Unit A1</Text>
          <Text style={styles.unitTenant}>Tenant: John Doe</Text>
        </View>
        <Text style={styles.unitRent}>₦120,000</Text>
      </View>

      <View style={styles.unitCard}>
        <View>
          <Text style={styles.unitName}>Unit A2</Text>
          <Text style={styles.unitTenant}>Vacant</Text>
        </View>
        <Text style={styles.unitRent}>₦120,000</Text>
      </View>

      <View style={styles.unitCard}>
        <View>
          <Text style={styles.unitName}>Unit A3</Text>
          <Text style={styles.unitTenant}>Tenant: Mary Smith</Text>
        </View>
        <Text style={styles.unitRent}>₦120,000</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: colors.backgroundLight,
    padding:20
  },

  header:{
    marginBottom:20
  },

  propertyName:{
    fontSize:26,
    fontWeight:"bold",
    color: colors.textPrimary
  },

  propertyLocation:{
    fontSize:14,
    color: colors.textSecondary,
    marginTop:4
  },

  statsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:25
  },

  statCard:{
    backgroundColor: colors.backgroundLight,
    width:"31%",
    padding:16,
    borderRadius:12,
    alignItems:"center",
    borderWidth:1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity:0.05,
    shadowRadius:6,
    elevation:2
  },

  statNumber:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:6,
    color: colors.textPrimary
  },

  statLabel:{
    fontSize:12,
    color: colors.textSecondary
  },

  sectionTitle:{
    fontSize:18,
    fontWeight:"600",
    marginBottom:12,
    color: colors.textPrimary
  },

  actionsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:25
  },

  actionButton:{
    width:"30%",
    alignItems:"center",
    backgroundColor: colors.backgroundLight,
    padding:14,
    borderRadius:10,
    borderWidth:1,
    borderColor: colors.border
  },

  actionText:{
    fontSize:12,
    marginTop:6,
    color: colors.textPrimary,
    fontWeight:"500"
  },

  unitCard:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: colors.backgroundLight,
    padding:16,
    borderRadius:10,
    marginBottom:12,
    borderWidth:1,
    borderColor: colors.border
  },

  unitName:{
    fontSize:16,
    fontWeight:"600",
    color: colors.textPrimary
  },

  unitTenant:{
    fontSize:13,
    color: colors.textSecondary,
    marginTop:3
  },

  unitRent:{
    fontSize:15,
    fontWeight:"600",
    color: colors.primary
  }

});