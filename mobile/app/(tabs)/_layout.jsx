import React from "react";
import { Redirect, Tabs } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreamCake from "../../constants/colors";
import CustomAddButton from "../../components/CustomTab";

const TabsLayout = () => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) return <Redirect href={"/auth/sign-in"} />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: CreamCake.secondary,
        tabBarInactiveTintColor: CreamCake.background,
        tabBarStyle: {
          backgroundColor: CreamCake.primary,
          shadowColor: "transparent",
          borderRadius: 30,
          height: 60,
          position: "absolute",
          marginBottom: 10,
          marginHorizontal: 10,
        },
        tabBarLabelStyle: {
          
          fontSize: 12,
          fontWeight: "bold",
        },

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="export"
        options={{
          title: "Export",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Add" // Corresponds to app/(tabs)/add.jsx
        options={{
          title: "",
          tabBarIcon: () => (
            <Ionicons name="add" size={30} color={CreamCake.primary} />
          ),
          tabBarButton: (props) => (
            <CustomAddButton
              {...props}
            />
          ), // Use the custom component
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
