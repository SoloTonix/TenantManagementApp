// src/screens/auth/RoleSelectScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'RoleSelect'>;

export default function RoleSelectScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>

      <TouchableOpacity style={styles.roleButton} onPress={() => navigation.replace('Login', { role: 'landlord' })}>
        <Text style={styles.buttonText}>Landlord / Property Manager</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.roleButton} onPress={() => navigation.replace('Login', { role: 'tenant' })}>
        <Text style={styles.buttonText}>Tenant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:24,
    backgroundColor: colors.backgroundLight,
  },
  title: {
    fontSize:28,
    fontWeight:'bold',
    color: colors.primary,
    marginBottom:32,
  },
  roleButton: {
    width:'100%',
    backgroundColor: colors.primary,
    paddingVertical:16,
    borderRadius:8,
    marginVertical:8,
    alignItems:'center',
  },
  buttonText: {
    color: colors.textInverse,
    fontSize:16,
    fontWeight:'600',
  },
});