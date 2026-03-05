// src/screens/auth/SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000); // 2 seconds splash
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Replace with your logo */}
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>RentFlow</Text>
      <Text style={styles.subtitle}>Smart Property Management</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.backgroundLight,
    justifyContent:'center',
    alignItems:'center',
  },
  logo: {
    width:120,
    height:120,
    marginBottom:16,
  },
  title: {
    fontSize:32,
    fontWeight:'bold',
    color: colors.primary,
  },
  subtitle: {
    fontSize:16,
    color: colors.textSecondary,
    marginTop:8,
  },
});