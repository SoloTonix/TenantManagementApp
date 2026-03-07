import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MaintenanceStatusScreen from "@/src/screens/tenant/requests/MaintenanceStatusScreen";
import RequestMaintenanceScreen from "@/src/screens/tenant/requests/RequestMaintenanceScreen";

const Stack = createNativeStackNavigator();

export default function RequestsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MaintenanceStatus"
        component={MaintenanceStatusScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RequestMaintenance"
        component={RequestMaintenanceScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}