import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootrLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="auth/index"
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
        }}
      /> */}
       <Stack.Screen
        name="home/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootrLayout;
