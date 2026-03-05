// src/navigation/stacks/PaymentsStack.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaymentsDashboard from "../../../screens/landlord/payments/PaymentsDashboard";
import PaymentDetailScreen from "../../../screens/landlord/payments/PaymentDetailScreen";
import GenerateReceiptScreen from "../../../screens/landlord/payments/GenerateReceiptScreen";

const Stack = createNativeStackNavigator();

export default function PaymentsStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="PaymentsDashboard"
        component={PaymentsDashboard}
        options={{ title: "Payments" }}
      />

      <Stack.Screen
        name="PaymentDetail"
        component={PaymentDetailScreen}
      />

      <Stack.Screen
        name="GenerateReceipt"
        component={GenerateReceiptScreen}
      />

    </Stack.Navigator>
  );
}