// src/// src/screens/auth/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import { AuthStackParamList } from '../../navigation/types';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export default function RegisterScreen({ navigation, route }: Props) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const role = route.params?.role;
  const { login } = useContext(AuthContext);
  const handleRegister = () => {
    // TODO: Add registration logic
    //navigation.replace(role === 'landlord' ? 'LandlordTabs' : 'TenantTabs');
    login({ role: role, name: fullName });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register ({role})</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        placeholder="Email"
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

      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login', { role })}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    paddingHorizontal:24,
    justifyContent:'center',
    backgroundColor: colors.backgroundLight,
    paddingVertical:32,
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