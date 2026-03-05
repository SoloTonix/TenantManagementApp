// src/screens/landlord/properties/PropertiesListScreen.tsx
import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

// Dummy properties data
const properties = [
  { id: '1', name: 'Sunset Apartments', units: 12, occupancy: '75%' },
  { id: '2', name: 'Greenwood Villas', units: 8, occupancy: '100%' },
  { id: '3', name: 'Riverside Flats', units: 10, occupancy: '60%' },
];

export default function PropertiesListScreen({ navigation }: any) {
  const [search, setSearch] = useState("");
  const renderProperty = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('PropertyDetail', { propertyId: item.id })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.propertyName}>{item.name}</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textSecondary} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardLabel}>Units: <Text style={styles.cardValue}>{item.units}</Text></Text>
        <Text style={styles.cardLabel}>Occupancy: <Text style={styles.cardValue}>{item.occupancy}</Text></Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Properties</Text>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => navigation.navigate('AddProperty')}
        >
          <MaterialCommunityIcons name="plus" size={20} color={colors.textInverse} />
          {/*<Text style={styles.addButtonText}>Add</Text>*/}
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

      {/* Properties List */}
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={renderProperty}
        contentContainerStyle={{ paddingBottom: 20 }}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },

  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  addButtonText: {
    color: colors.textInverse,
    fontWeight: '600',
    marginLeft: 6,
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
    padding: 16,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 15,
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  propertyName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },

  cardValue: {
    fontWeight: '600',
    color: colors.textPrimary,
  },
});