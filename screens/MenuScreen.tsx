import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { AppContext } from '../App'; // Global context for immediate UI updates
import { styles } from './styles/MenuScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuScreen: React.FC = () => {
  // Pulling global states and API URL from AppContext
  const { 
    API_BASE, 
    unit, setUnit, 
    notificationsEnabled, setNotificationsEnabled 
  } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  // 1. Fetch current settings from the modular settingsRoutes on mount
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch(`${API_BASE}/settings`);
      const data = await response.json();
      
      // Sync global context with backend data
      setNotificationsEnabled(data.pushEnabled);
      setUnit(data.unit);
    } catch (error) {
      console.error("Error loading settings from lab:", error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Sync changes back to the modular backend
  const syncSettings = async (newPush: boolean, newUnit: string) => {
    try {
      const response = await fetch(`${API_BASE}/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pushEnabled: newPush, unit: newUnit }),
      });
      
      if (!response.ok) throw new Error("Sync failed");
    } catch (error) {
      // If sync fails, we alert the user but the local UI remains updated
      Alert.alert("Sync Error", "Settings saved locally, but failed to sync with Lab Cloud.");
    }
  };

  const handlePushToggle = (value: boolean) => {
    setNotificationsEnabled(value); // Update global UI immediately
    syncSettings(value, unit);     // Sync to Firebase via Express
  };

  const handleUnitToggle = (value: string) => {
    setUnit(value);               // Update global UI (Dashboard will auto-convert)
    syncSettings(notificationsEnabled, value);
  };

  if (loading) {
    return (
      <View style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#1B4332" />
        <Text style={{ marginTop: 10, color: '#1B4332', fontWeight: '600' }}>Accessing Lab Config...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Branding Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Abacanana</Text>
          <Text style={styles.headerSub}>Settings & Menu</Text>
        </View>

        <View style={styles.content}>
          {/* Push Notifications Card */}
          <View style={styles.menuCard}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#1B4332" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Push Notifications</Text>
              <Text style={styles.menuDetail}>Alerts for critical sensor levels</Text>
            </View>
            <Switch 
              value={notificationsEnabled} 
              onValueChange={handlePushToggle}
              trackColor={{ false: "#A8B95B", true: "#1B4332" }}
              thumbColor={notificationsEnabled ? "#F1E5AC" : "#F1E5AC"}
            />
          </View>

          {/* Temperature Unit Toggle Card */}
          <View style={styles.menuCard}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="molecule" size={24} color="#1B4332" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Temperature Unit</Text>
              <Text style={styles.menuDetail}>Display readings in {unit === 'C' ? 'Celsius' : 'Fahrenheit'}</Text>
            </View>
            
            <View style={styles.toggleContainer}>
              <TouchableOpacity 
                onPress={() => handleUnitToggle('C')} 
                style={[styles.unitBtn, unit === 'C' && styles.activeUnit]}
              >
                <Text style={[styles.unitText, unit === 'C' && styles.activeUnitText]}>°C</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => handleUnitToggle('F')} 
                style={[styles.unitBtn, unit === 'F' && styles.activeUnit]}
              >
                <Text style={[styles.unitText, unit === 'F' && styles.activeUnitText]}>°F</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer / About */}
          <View style={styles.footerInfo}>
             <MaterialCommunityIcons name="leaf-maple" size={20} color="#1B4332" style={{opacity: 0.5}}/>
             <Text style={styles.versionText}>Abacanana Lab Cloud Connected v1.1.0</Text>
          </View>
        </View>

        {/* Space for the bottom tab bar */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;