import React from "react";
import { Redirect, Tabs } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreamCake from "@/constants/colors";
import CustomAddButton from "@/components/CustomTab";
import ProfileAvatar from "@/components/ProfileAvatar";

const TabsLayout = () => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) return <Redirect href={"/(auth)/sign-in"} />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: CreamCake.secondary,
        },
        headerRight: () => <ProfileAvatar />,
        tabBarActiveTintColor: CreamCake.secondary,
        tabBarInactiveTintColor: CreamCake.background,
        tabBarStyle: {
          backgroundColor: CreamCake.primary,
          shadowColor: CreamCake.primary,
          elevation: 4,
          borderRadius: 30,
          height: 60,
          position: "absolute",
          marginBottom: 10,
          marginHorizontal: 10,
          // Remove default padding to have more control
          paddingBottom: 0,
          paddingTop: 0,
          paddingHorizontal: 0,
        },
        tabBarItemStyle: {
          // Center each tab item vertically and horizontally
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingVertical: 4,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(export)"
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
          tabBarButton: (props) => <CustomAddButton {...props} />, // Use the custom component
        }}
      />
      <Tabs.Screen
        name="(favorites)"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
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
