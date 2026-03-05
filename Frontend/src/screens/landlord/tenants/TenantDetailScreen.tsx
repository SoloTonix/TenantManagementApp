// src/screens/landlord/tenants/TenantDetailScreen.tsx

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

export default function TenantDetailScreen() {

  return (
    <View style={styles.container}>

      {/* Tenant Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <MaterialCommunityIcons name="account" size={28} color={colors.primary} />
        </View>

        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.unit}>Unit 3B • Sunset Apartments</Text>
        </View>
      </View>

      {/* Info Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tenant Information</Text>

        <Text style={styles.info}>Phone: +234 812 345 6789</Text>
        <Text style={styles.info}>Email: john@email.com</Text>
        <Text style={styles.info}>Move-in: Jan 10 2024</Text>
        <Text style={styles.info}>Lease End: Jan 10 2025</Text>
      </View>

      {/* Lease Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Lease Details</Text>

        <Text style={styles.info}>Rent: ₦500,000 / year</Text>
        <Text style={styles.info}>Next Due: June 01 2026</Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Paid</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <Text style={styles.cardTitle}>Actions</Text>

        <TouchableOpacity style={styles.actionBtn}>
          <MaterialCommunityIcons name="bell-outline" size={20} color={colors.primary}/>
          <Text style={styles.actionText}>Send Notice</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <MaterialCommunityIcons name="cash-plus" size={20} color={colors.primary}/>
          <Text style={styles.actionText}>Record Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <MaterialCommunityIcons name="history" size={20} color={colors.primary}/>
          <Text style={styles.actionText}>Payment History</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor: colors.backgroundLight,
padding:20
},

header:{
flexDirection:"row",
alignItems:"center",
marginBottom:20
},

avatar:{
width:50,
height:50,
borderRadius:25,
backgroundColor:"#EEF4FF",
alignItems:"center",
justifyContent:"center",
marginRight:12
},

name:{
fontSize:20,
fontWeight:"600",
color:colors.textPrimary
},

unit:{
fontSize:14,
color:colors.textSecondary
},

card:{
backgroundColor:"#fff",
padding:16,
borderRadius:12,
borderWidth:1,
borderColor:colors.border,
marginBottom:16
},

cardTitle:{
fontSize:16,
fontWeight:"600",
marginBottom:10,
color:colors.textPrimary
},

info:{
fontSize:14,
color:colors.textSecondary,
marginBottom:6
},

statusBadge:{
marginTop:8,
backgroundColor:"#E6F7ED",
paddingHorizontal:10,
paddingVertical:4,
borderRadius:6,
alignSelf:"flex-start"
},

statusText:{
color:"#1E9E5A",
fontWeight:"600"
},

actions:{
marginTop:10
},

actionBtn:{
flexDirection:"row",
alignItems:"center",
paddingVertical:12,
borderBottomWidth:1,
borderColor:colors.border
},

actionText:{
marginLeft:10,
fontSize:15,
color:colors.textPrimary
}

});