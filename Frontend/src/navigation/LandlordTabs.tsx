// src/navigation/LandlordTabs.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DashboardStack from "./stacks/landlord/DashboardStack";
import PropertiesStack from "./stacks/landlord/PropertiesStack";
import TenantsStack from "./stacks/landlord/TenantsStack";
import PaymentsStack from "./stacks/landlord/PaymentsStack";
import ProfileStack from "./stacks/landlord/ProfileStack";

import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

export default function LandlordTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "DashboardStack")
            iconName = "view-dashboard-outline";

          else if (route.name === "PropertiesStack")
            iconName = "office-building-outline";

          else if (route.name === "TenantsStack")
            iconName = "account-group-outline";

          else if (route.name === "PaymentsStack")
            iconName = "credit-card-outline";

          else if (route.name === "ProfileStack")
            iconName = "account-circle-outline";

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={color}
            />
          );
        },

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#9CA3AF",

        tabBarStyle: {
          height: 65,
          paddingTop: 6,
          paddingBottom: 8,
          backgroundColor: "#ffffff",

          borderTopWidth: 0,

          elevation: 12,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 10,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      })}
    >
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{ title: "Dashboard" }}
      />

      <Tab.Screen
        name="PropertiesStack"
        component={PropertiesStack}
        options={{ title: "Properties" }}
      />

      <Tab.Screen
        name="TenantsStack"
        component={TenantsStack}
        options={{ title: "Tenants" }}
      />

      <Tab.Screen
        name="PaymentsStack"
        component={PaymentsStack}
        options={{ title: "Payments" }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
}