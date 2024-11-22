import React from "react";
import { Tabs } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";

export default function _layout() {
  return (
    <NavigationContainer>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home Screen",
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Best Deals",
            tabBarShowLabel: false,
          }}
        />
      </Tabs>
    </NavigationContainer>
  );
}
