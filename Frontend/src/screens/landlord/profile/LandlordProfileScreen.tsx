// src/screens/landlord/profile/ProfileScreen.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import { AuthContext } from '../../../context/AuthContext';

export default function LandlordProfileScreen() {
  const { user, logout } = useContext(AuthContext);

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
          <Text style={styles.infoText}>{user?.role || 'Landlord'}</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.primary }]}>
          <MaterialCommunityIcons name="pencil-outline" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.secondary }]}>
          <MaterialCommunityIcons name="lock-outline" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.error }]} onPress={logout}>
          <MaterialCommunityIcons name="logout" size={24} color={colors.textInverse} />
          <Text style={[styles.actionText, { color: colors.textInverse }]}>Logout</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionButton: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  actionText: {
    fontSize: 12,
    marginTop: 6,
    fontWeight: '600',
    textAlign: 'center',
  },
});