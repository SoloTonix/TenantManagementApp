import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MarketPlaceScreen from "../../../screens/tenant/market/MarketPlaceScreen";
import InterestFormScreen from "../../../screens/tenant/market/InterestFormScreen";
import ListingDetailsScreen from "../../../screens/tenant/market/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

export default function MarketStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="MarketPlace"
        component={MarketPlaceScreen}
        options={{ headerShown: false }}
        />

        <Stack.Screen
        name="InterestForm"
        component={InterestFormScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}