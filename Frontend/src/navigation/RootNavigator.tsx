// src/navigation/RootNavigator.tsx
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import LandlordTabs from "./LandlordTabs";
import TenantTabs from "./TenantTabs";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : user.role === "landlord" ? (
        <Stack.Screen name="Landlord" component={LandlordTabs} />
      ) : (
        <Stack.Screen name="Tenant" component={TenantTabs} />
      )}
    </Stack.Navigator>
  );
}