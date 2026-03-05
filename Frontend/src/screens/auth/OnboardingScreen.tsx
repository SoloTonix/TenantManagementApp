// src/screens/auth/OnboardingScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

const slides = [
  {
    key: '1',
    title: 'Manage Properties Easily',
    subtitle: 'Track tenants and rent in one place',
    image: require('../../../assets/images/blue-house.jpg'),
  },
  {
    key: '2',
    title: 'Never Miss Rent Payments',
    subtitle: 'Automatic reminders and receipts',
    image: require('../../../assets/images/blue-house.jpg'),
  },
  {
    key: '3',
    title: 'Transparent Tenant Communication',
    subtitle: 'Maintenance requests and announcements',
    image: require('../../../assets/images/blue-house.jpg'),
  },
];

export default function OnboardingScreen({ navigation }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('RoleSelect');
    }
  };

  const { title, subtitle, image } = slides[currentIndex];

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <TouchableOpacity style={styles.button} onPress={nextSlide}>
        <Text style={styles.buttonText}>
          {currentIndex === slides.length -1 ? 'Get Started' : 'Next →'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.backgroundLight,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:24,
  },
  image: {
    width:250,
    height:250,
    marginBottom:24,
    resizeMode:'contain',
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
    color: colors.primary,
    textAlign:'center',
  },
  subtitle: {
    fontSize:16,
    color: colors.textSecondary,
    textAlign:'center',
    marginVertical:12,
  },
  button: {
    marginTop:32,
    backgroundColor: colors.primary,
    paddingVertical:14,
    paddingHorizontal:40,
    borderRadius:8,
  },
  buttonText: {
    color: colors.textInverse,
    fontSize:16,
    fontWeight:'600',
  },
});