import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaymentHistoryScreen from "@/src/screens/tenant/payments/PaymentHistoryScreen";
import ReceiptScreen from "@/src/screens/tenant/payments/ReceiptScreen";

const Stack = createNativeStackNavigator();

export default function PaymentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PaymentHistory"
        component={PaymentHistoryScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Receipt"
        component={ReceiptScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}