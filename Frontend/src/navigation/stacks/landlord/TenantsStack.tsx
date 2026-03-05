// src/navigation/stacks/TenantsStack.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TenantsListScreen from "../../../screens/landlord/tenants/TenantsListScreen";
import TenantDetailScreen from "../../../screens/landlord/tenants/TenantDetailScreen";
import AssignTenantScreen from "../../../screens/landlord/tenants/AssignTenantScreen";

const Stack = createNativeStackNavigator();

export default function TenantsStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="TenantsList"
        component={TenantsListScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TenantDetail"
        component={TenantDetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AssignTenant"
        component={AssignTenantScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}