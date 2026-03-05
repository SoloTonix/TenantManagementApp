// src/navigation/stacks/ProfileStack.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import LandlordProfileScreen from "@/src/screens/landlord/profile/LandlordProfileScreen";
const Stack = createNativeStackNavigator();

function ProfileScreen(){
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default function ProfileStack(){
  return(
    <Stack.Navigator>

      <Stack.Screen
        name="LandlordProfile"
        component={LandlordProfileScreen}
      />

    </Stack.Navigator>
  )
}