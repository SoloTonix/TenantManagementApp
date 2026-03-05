// src/screens/landlord/dashboard/DashboardScreen.tsx
import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { AuthContext } from "../../../context/AuthContext";

export default function DashboardScreen() {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.name}>{user?.name}</Text>
          </View>
          <TouchableOpacity style={styles.notification}>
            <MaterialCommunityIcons name="bell" size={30} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Summary Cards */}
      <View style={styles.cardsContainer}>

        <View style={styles.card}>
          <MaterialCommunityIcons name="office-building-outline" size={28} color={colors.textInverse} />
          <Text style={styles.cardNumber}>12</Text>
          <Text style={styles.cardLabel}>Properties</Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="account-group-outline" size={28} color={colors.textInverse} />
          <Text style={styles.cardNumber}>36</Text>
          <Text style={styles.cardLabel}>Tenants</Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="credit-card-outline" size={28} color={colors.textInverse} />
          <Text style={styles.cardNumber}>₦1.2M</Text>
          <Text style={styles.cardLabel}>Payments</Text>
        </View>

        <View style={[styles.card, { borderWidth: 2, borderColor: colors.primary , backgroundColor: colors.backgroundLight}]}>
          <MaterialCommunityIcons name="clock-outline" size={28} color={colors.primary} />
          <Text style={[styles.cardNumber, { color: colors.primary }]}>4</Text>
          <Text style={[styles.cardLabel, { color: colors.primary }]}>Pending</Text>
        </View>

      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.backgroundLight, borderWidth: 1, borderColor: colors.primary }]}>
          <MaterialCommunityIcons name="plus-circle-outline" size={24} color={colors.primary} />
          <Text style={[styles.actionText, { color: colors.primary }]}>Add Property</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.textSecondary }]}>
          <MaterialCommunityIcons name="account-plus-outline" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Add Tenant</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.accent }]}>
          <MaterialCommunityIcons name="cash-plus" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Record Payment</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>John Doe paid rent for Apartment 3</Text>
      </View>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>New tenant added to Block B</Text>
      </View>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>Maintenance request submitted</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    padding: 20,
  },

  // Full-width, professional header
  header: {
    backgroundColor: colors.backgroundLight,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 40,
    shadowColor: colors.shadow,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: '400',
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.secondary,
    marginTop: 4,
  },

  notification: {
    backgroundColor: colors.backgroundLight, // slightly lighter blue
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    padding: 2,
  },

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: -30, // overlap cards on header
    marginBottom: 25,
  },

  card: {
    width: "48%",
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 0,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  cardNumber: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
    color: colors.textInverse,
  },

  cardLabel: {
    fontSize: 13,
    color: colors.textInverse,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: colors.textPrimary,
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  actionButton: {
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "30%",
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  actionText: {
    fontSize: 12,
    marginTop: 6,
    fontWeight: "600",
  },

  activityCard: {
    backgroundColor: colors.backgroundLight,
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  activityText: {
    color: colors.textSecondary,
  },

});