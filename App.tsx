import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";

// Screen Imports
import DashboardScreen from "./screens/DashboardScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import MenuScreen from "./screens/MenuScreen";

// 1. API Configuration
// Replace with your actual local IP address (NOT localhost)
const API_BASE = "http://localhost:3000/api"; 

export const AppContext = createContext<any>(null);
const Tab = createBottomTabNavigator();

export default function App() {
  // --- Global States synced with Backend ---
  const [tempThreshold, setTempThreshold] = useState(35);
  const [humThreshold, setHumThreshold] = useState(85);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [unit, setUnit] = useState("C");

  // 2. Initial Sync: Fetch Lab Settings from Firebase on Start
  useEffect(() => {
    const fetchInitialSettings = async () => {
      try {
        const response = await fetch(`${API_BASE}/settings`);
        const data = await response.json();
        
        // Update local context with data from Firebase
        setNotificationsEnabled(data.pushEnabled);
        setUnit(data.unit);
        // If your settingsRoutes also returns thresholds:
        if (data.tempThreshold) setTempThreshold(data.tempThreshold);
        if (data.humThreshold) setHumThreshold(data.humThreshold);
        
      } catch (error) {
        console.error("Initial Sync Failed:", error);
      }
    };

    fetchInitialSettings();
  }, []);

  return (
    <AppContext.Provider
      value={{
        tempThreshold,
        setTempThreshold,
        humThreshold,
        setHumThreshold,
        notificationsEnabled,
        setNotificationsEnabled,
        unit,
        setUnit,
        API_BASE, // Pass this down so screens don't have to redefine it
      }}
    >
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
              let iconName: any;
              if (route.name === "Dashboard") iconName = "map-marker";
              else if (route.name === "Notifications") iconName = "email";
              else iconName = "menu-open";

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={28}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: "#1B4332",
            tabBarInactiveTintColor: "rgba(27, 67, 50, 0.4)",
            tabBarStyle: {
              height: 90,
              paddingBottom: 30,
              paddingTop: 10,
              backgroundColor: "#B7C96B",
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarLabelStyle: {
              fontWeight: "700",
              fontSize: 12,
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}