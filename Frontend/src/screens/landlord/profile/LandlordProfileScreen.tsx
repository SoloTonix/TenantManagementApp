// src/screens/landlord/profile/ProfileScreen.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import { AuthContext } from '../../../context/AuthContext';

export default function LandlordProfileScreen() {
  const { user, logout , switchRole } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <MaterialCommunityIcons name="account-circle" size={100} color={colors.primary} />
        </View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      {/* Account Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <MaterialCommunityIcons name="phone-outline" size={24} color={colors.primary} />
          <Text style={styles.infoText}>{user?.phone || 'Not set'}</Text>
        </View>
        <View style={styles.infoCard}>
          <MaterialCommunityIcons name="map-marker-outline" size={24} color={colors.primary} />
          <Text style={styles.infoText}>{user?.address || 'Not set'}</Text>
        </View>
        <View style={styles.infoCard}>
          <MaterialCommunityIcons name="briefcase-outline" size={24} color={colors.primary} />
          <Text style={styles.infoText}>
            {user?.activeRole ? user.activeRole.toUpperCase() : 'LANDLORD'}
          </Text>
        </View>
      </View>
      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Account</Text>

      <View style={styles.actionsContainer}>

        <TouchableOpacity style={styles.actionRow}>
          <View style={styles.actionLeft}>
            <MaterialCommunityIcons name="account-edit-outline" size={22} color={colors.primary} />
            <Text style={styles.actionLabel}>Edit Profile</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={22} color={colors.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionRow}>
          <View style={styles.actionLeft}>
            <MaterialCommunityIcons name="lock-outline" size={22} color={colors.primary} />
            <Text style={styles.actionLabel}>Change Password</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={22} color={colors.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionRow}
          onPress={() =>
            switchRole(user?.activeRole === 'landlord' ? 'tenant' : 'landlord')
          }
        >
          <View style={styles.actionLeft}>
            <MaterialCommunityIcons name="swap-horizontal" size={22} color={colors.primary} />
            <Text style={styles.actionLabel}>Switch Role</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={22} color={colors.textSecondary} />
        </TouchableOpacity>

      </View>

      {/* Logout separated */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <MaterialCommunityIcons name="logout" size={20} color={colors.error} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },

  avatarContainer: {
    marginBottom: 16,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },

  email: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },

  infoContainer: {
    marginBottom: 30,
  },

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  infoText: {
    marginLeft: 12,
    fontSize: 16,
    color: colors.textPrimary,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 12,
  },

actionsContainer: {
  backgroundColor: '#fff',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: colors.border,
  marginBottom: 24,
},

actionRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 18,
  paddingHorizontal: 16,
  borderBottomWidth: 1,
  borderBottomColor: colors.border,
},

actionLeft: {
  flexDirection: 'row',
  alignItems: 'center',
},

actionLabel: {
  marginLeft: 12,
  fontSize: 16,
  color: colors.textPrimary,
  fontWeight: '500',
},

logoutButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 16,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: colors.error,
},

logoutText: {
  marginLeft: 8,
  fontSize: 16,
  color: colors.error,
  fontWeight: '600',
},
});