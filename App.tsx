import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// Screen Imports
import DashboardScreen from './screens/DashboardScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import MenuScreen from './screens/MenuScreen';
export const AppContext = createContext<any>(null);
const Tab = createBottomTabNavigator();

export default function App() {
  const [temp, setTemp] = useState(32);
  const [humidity, setHumidity] = useState(40);
  const [tempThreshold, setTempThreshold] = useState(35);
  const [humThreshold, setHumThreshold] = useState(85);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notifications, setNotifications] = useState<any[]>([
    { id: '1', title: 'System Online', message: 'Abacanana laboratory monitoring active.', time: '08:00 AM' }
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate minor changes in lab environment
      const newTemp = Math.floor(28 + Math.random() * 8);
      const newHum = Math.floor(35 + Math.random() * 15);
      setTemp(newTemp);
      setHumidity(newHum);

      // Trigger Alert Logic
      if (notificationsEnabled) {
        if (newTemp > tempThreshold) {
          addNotification('Temp Alert', `Critical heat: ${newTemp}°C detected.`);
        }
      }
    }, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, [tempThreshold, notificationsEnabled]);

  const addNotification = (title: string, message: string) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setNotifications(prev => [newNote, ...prev].slice(0, 10));
  };

  return (
    <AppContext.Provider value={{ 
      temp, humidity, tempThreshold, setTempThreshold, 
      humThreshold, setHumThreshold, notificationsEnabled, 
      setNotificationsEnabled, notifications 
    }}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // 1. THIS FIXES THE HEADER ISSUE:
            headerShown: false, 
            
            // 2. STYLING THE BOTTOM BAR:
            tabBarIcon: ({ color, size }) => {
              let iconName: any;
              if (route.name === 'Dashboard') iconName = 'map-marker';
              else if (route.name === 'Notifications') iconName = 'email';
              else iconName = 'menu-open';
              
              return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
            },
            tabBarActiveTintColor: '#1B4332', // Deep Forest Green
            tabBarInactiveTintColor: 'rgba(27, 67, 50, 0.4)', // Faded Green
            tabBarStyle: { 
              height: 90, 
              paddingBottom: 30, 
              paddingTop: 10,
              backgroundColor: '#B7C96B', // Your original Olive Green
              borderTopWidth: 0,
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
            },
            tabBarLabelStyle: {
              fontWeight: '700',
              fontSize: 12,
            }
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