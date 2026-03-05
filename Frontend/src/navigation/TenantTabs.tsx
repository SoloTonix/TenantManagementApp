// src/navigation/TenantTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TenantHomeScreen from "../screens/tenant/dashboard/TenantHomeScreen";
import PaymentHistoryScreen from "../screens/tenant/payments/PaymentHistoryScreen";
import ReceiptScreen from "../screens/tenant/payments/ReceiptScreen";
import MaintenanceStatusScreen from "../screens/tenant/maintenance/MaintenanceStatusScreen";
import MessagesScreen from "../screens/tenant/messages/MessagesScreen";
import TenantProfileScreen from "../screens/tenant/profile/TenantProfileScreen";

const Tab = createBottomTabNavigator();

export default function TenantTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TenantHomeScreen} />
      <Tab.Screen name="Payments" component={PaymentHistoryScreen} />
      <Tab.Screen name="Receipt" component={ReceiptScreen} />
      <Tab.Screen name="Maintenance" component={MaintenanceStatusScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={TenantProfileScreen} />
    </Tab.Navigator>
  );
}
