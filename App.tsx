import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import NotificationsScreen from './screens/Notifications/NotificationsScreen';
import SettingsScreen from './screens/Settings/SettingsScreen';
import { ScreenName } from './components/NavBar/NavBar';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenName>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen onNavigate={setActiveScreen} />;
      case 'notifications':
        return <NotificationsScreen onNavigate={setActiveScreen} />;
      case 'settings':
        return <SettingsScreen onNavigate={setActiveScreen} />;
      default:
        return <DashboardScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <SafeAreaProvider>
      {renderScreen()}
    </SafeAreaProvider>
  );
}