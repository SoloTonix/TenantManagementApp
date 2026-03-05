// src/navigation/stacks/PropertiesStack.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PropertiesListScreen from "../../../screens/landlord/properties/PropertiesListScreen";
import PropertyDetailScreen from "../../../screens/landlord/properties/PropertyDetailScreen";
import AddPropertyScreen from "../../../screens/landlord/properties/AddPropertyScreen";
import EditPropertyScreen from "../../../screens/landlord/properties/EditPropertyScreen";

import UnitsListScreen from "../../../screens/landlord/units/UnitsListScreen";
import AddUnitScreen from "../../../screens/landlord/units/AddUnitScreen";
import UnitDetailScreen from "../../../screens/landlord/units/UnitDetailScreen";

const Stack = createNativeStackNavigator();

export default function PropertiesStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="PropertiesList"
        component={PropertiesListScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="PropertyDetail"
        component={PropertyDetailScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="AddProperty"
        component={AddPropertyScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="EditProperty"
        component={EditPropertyScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="UnitsList"
        component={UnitsListScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="AddUnit"
        component={AddUnitScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="UnitDetail"
        component={UnitDetailScreen}
        options={{headerShown:false}}
      />

    </Stack.Navigator>
  );
}