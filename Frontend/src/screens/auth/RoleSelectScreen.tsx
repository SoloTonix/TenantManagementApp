// src/screens/auth/RoleSelectScreen.tsx

import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import colors from "../../constants/colors";

export default function RoleSelectScreen({ navigation }: any) {
  const { switchRole } = useContext(AuthContext);

  const selectRole = (role: "landlord" | "tenant") => {
    switchRole?.(role);

    navigation.replace(
      role === "landlord" ? "LandlordTabs" : "TenantTabs"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you</Text>

      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => selectRole("landlord")}
      >
        <Text style={styles.roleText}>LANDLORD</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => selectRole("tenant")}
      >
        <Text style={styles.roleText}>TENANT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: colors.backgroundLight,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: colors.primary,
  },
  roleButton: {
    width: "80%",
    paddingVertical: 16,
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  roleText: {
    color: colors.textInverse,
    fontSize: 18,
    fontWeight: "600",
  },
});