import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TenantProfileScreen from "../../../screens/tenant/profile/TenantProfileScreen";
import AgentProfileScreen from "../../../screens/tenant/profile/AgentProfileScreen";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TenantProfile"
        component={TenantProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AgentProfile"
        component={AgentProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}