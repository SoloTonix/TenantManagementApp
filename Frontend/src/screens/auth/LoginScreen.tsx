// src/screens/auth/LoginScreen.tsx

import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import { AuthStackParamList } from '../../navigation/types';
import { AuthContext, User } from '../../context/AuthContext';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const handleLogin = () => {

    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }

    // Mock backend response
    const userData: User = {
      name: 'John Doe',
      email,
      roles: ['landlord', 'tenant']
    };

    // Save user in context
    login(userData);

    // Go to role selection
    navigation.replace('RoleSelect');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome</Text>

      <TextInput
        placeholder="Email or Phone"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
        <Text style={styles.linkText}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.linkText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    justifyContent:'center',
    backgroundColor: colors.backgroundLight,
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    color: colors.primary,
    marginBottom:32,
    textAlign:'center',
  },
  input:{
    borderWidth:1,
    borderColor: colors.border,
    borderRadius:8,
    padding:14,
    marginBottom:16,
    backgroundColor:'#fff',
  },
  button:{
    backgroundColor: colors.primary,
    paddingVertical:16,
    borderRadius:8,
    alignItems:'center',
    marginBottom:16,
  },
  buttonText:{
    color: colors.textInverse,
    fontSize:16,
    fontWeight:'600',
  },
  linkText:{
    color: colors.primary,
    fontSize:14,
    textAlign:'center',
    marginTop:8,
  }
});