import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles/MenuScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuScreen: React.FC = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [unit, setUnit] = useState('C');
  const [loading, setLoading] = useState(true);

  // 1. Fetch current settings from script.js on mount
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      // Replace with your local machine's IP address
      const response = await fetch('http://192.168.1.XX:3000/api/settings');
      const data = await response.json();
      setPushEnabled(data.pushEnabled);
      setUnit(data.unit);
    } catch (error) {
      console.error("Error loading settings:", error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Function to sync changes back to the backend
  const syncSettings = async (newPush: boolean, newUnit: string) => {
    try {
      await fetch('http://192.168.1.XX:3000/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pushEnabled: newPush, unit: newUnit }),
      });
    } catch (error) {
      Alert.alert("Sync Error", "Could not save settings to lab database.");
    }
  };

  const handlePushToggle = (value: boolean) => {
    setPushEnabled(value);
    syncSettings(value, unit); // Instantly update backend
  };

  const handleUnitToggle = (value: string) => {
    setUnit(value);
    syncSettings(pushEnabled, value); // Instantly update backend
  };

  if (loading) {
    return (
      <View style={[styles.safeArea, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#1B4332" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Unified Branding Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Abacanana</Text>
          <Text style={styles.headerSub}>Settings & Menu</Text>
        </View>

        <View style={styles.content}>
          {/* Push Notifications Setting */}
          <View style={styles.menuCard}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="bell-outline" size={24} color="#1B4332" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Push Notifications</Text>
              <Text style={styles.menuDetail}>Receive alerts for lab thresholds</Text>
            </View>
            <Switch 
              value={pushEnabled} 
              onValueChange={handlePushToggle}
              trackColor={{ false: "#A8B95B", true: "#1B4332" }}
              thumbColor={pushEnabled ? "#F1E5AC" : "#F1E5AC"}
            />
          </View>

          {/* Temperature Unit Toggle */}
          <View style={styles.menuCard}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="thermometer-cog" size={24} color="#1B4332" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Temperature Unit</Text>
              <Text style={styles.menuDetail}>Toggle between Celsius and Fahrenheit</Text>
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

          {/* About/Info Card */}
          <View style={styles.footerInfo}>
             <MaterialCommunityIcons name="flask-outline" size={20} color="#1B4332" style={{opacity: 0.5}}/>
             <Text style={styles.versionText}>Abacanana Monitoring System v1.0.2</Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;