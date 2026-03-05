import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<Props> = ({ value, onChangeText }) => (
  <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
);

const styles = StyleSheet.create({
  input: {},
});

export default Input;
