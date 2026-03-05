import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

// Dummy data
const tenants = [
  { id: "1", name: "John Doe", property: "Sunset Apartments", unit: "A3", status: "Active" },
  { id: "2", name: "Mary Johnson", property: "Greenwood Villas", unit: "B1", status: "Owing" },
  { id: "3", name: "David Smith", property: "Riverside Flats", unit: "C2", status: "Active" },
];

export default function TenantsListScreen({ navigation }: any) {

  const [search, setSearch] = useState("");

  const filteredTenants = tenants.filter((tenant) =>
    tenant.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderTenant = ({ item }: any) => {

    const statusColor =
      item.status === "Active"
        ? colors.accent
        : colors.warning;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("TenantDetail", { tenantId: item.id })}
      >
        <View style={styles.cardHeader}>

          <View style={styles.avatar}>
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={colors.primary}
            />
          </View>

          <View style={styles.tenantInfo}>
            <Text style={styles.tenantName}>{item.name}</Text>
            <Text style={styles.tenantSub}>
              {item.property} • Unit {item.unit}
            </Text>
          </View>

          <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Tenants</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddTenant")}
        >
          <MaterialCommunityIcons name="plus" size={20} color={colors.textInverse} />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={20}
          color={colors.textSecondary}
        />
        <TextInput
          placeholder="Search tenants..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Tenants List */}
      <FlatList
        data={filteredTenants}
        keyExtractor={(item) => item.id}
        renderItem={renderTenant}
        contentContainerStyle={{ paddingBottom: 30 }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },

  addButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 8,
  },

  card: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 0,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    backgroundColor: "#EFF6FF",
    padding: 10,
    borderRadius: 20,
    marginRight: 12,
  },

  tenantInfo: {
    flex: 1,
  },

  tenantName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },

  tenantSub: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  statusText: {
    color: colors.textInverse,
    fontSize: 12,
    fontWeight: "600",
  },

});