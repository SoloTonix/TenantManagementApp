import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../../constants/colors";
import { AuthContext } from "../../context/AuthContext";

export default function AppLaunchScreen({ navigation }: any) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        navigation.replace("MainApp"); // dashboard tabs
      } else {
        navigation.replace("Login");
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RentFlow</Text>
      <ActivityIndicator
        size="small"
        color={colors.primary}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.textInverse,
    letterSpacing: 1,
  },
});