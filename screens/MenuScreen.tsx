import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, Alert, TextInput } from 'react-native';
import { AppContext } from '../App'; 
import { styles } from './styles/MenuScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuScreen: React.FC = () => {
  const { 
    API_BASE, 
    unit, setUnit, 
    notificationsEnabled, setNotificationsEnabled 
  } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  
  // New Threshold States
  const [tempMin, setTempMin] = useState('20');
  const [tempMax, setTempMax] = useState('35');
  const [humMin, setHumMin] = useState('60');
  const [humMax, setHumMax] = useState('90');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch(`${API_BASE}/settings`);
      const data = await response.json();
      
      setNotificationsEnabled(data.pushEnabled);
      setUnit(data.unit);
      // Sync thresholds from DB
      setTempMin(String(data.tempMin ?? '20'));
      setTempMax(String(data.tempMax ?? '35'));
      setHumMin(String(data.humMin ?? '60'));
      setHumMax(String(data.humMax ?? '90'));
    } catch (error) {
      console.error("Error loading settings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Sync function for toggles (Push/Unit)
  const syncSettings = async (newPush: boolean, newUnit: string) => {
    try {
      await fetch(`${API_BASE}/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            pushEnabled: newPush, 
            unit: newUnit,
            tempMin: Number(tempMin),
            tempMax: Number(tempMax),
            humMin: Number(humMin),
            humMax: Number(humMax)
        }),
      });
    } catch (error) {
      Alert.alert("Sync Error", "Failed to sync with Lab Cloud.");
    }
  };

  // Dedicated function for saving numeric thresholds
  const handleSaveThresholds = () => {
    syncSettings(notificationsEnabled, unit);
    Alert.alert("Success", "Lab thresholds updated.");
  };

  const handlePushToggle = (value: boolean) => {
    setNotificationsEnabled(value);
    syncSettings(value, unit);
  };

  const handleUnitToggle = (value: string) => {
    setUnit(value);
    syncSettings(notificationsEnabled, value);
  };

  if (loading) {
    return (
      <View style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#1B4332" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Abacanana</Text>
          <Text style={styles.headerSub}>Settings & Menu</Text>
        </View>

        <View style={styles.content}>
          
          {/* 1. Threshold Configuration Section */}
          <Text style={styles.sectionTitle}>Alert Thresholds</Text>
          
          <View style={styles.thresholdGrid}>
            <View style={styles.thresholdCard}>
              <Text style={styles.inputLabel}>Minimum Temperature (°C)</Text>
              <TextInput 
                style={styles.textInput}
                keyboardType="numeric"
                value={tempMin}
                onChangeText={setTempMin}
              />
            </View>
            <View style={styles.thresholdCard}>
              <Text style={styles.inputLabel}>Maximum Temperature (°C)</Text>
              <TextInput 
                style={styles.textInput}
                keyboardType="numeric"
                value={tempMax}
                onChangeText={setTempMax}
              />
            </View>
          </View>

          <View style={styles.thresholdGrid}>
            <View style={styles.thresholdCard}>
              <Text style={styles.inputLabel}>Minimum Humidity (%)</Text>
              <TextInput 
                style={styles.textInput}
                keyboardType="numeric"
                value={humMin}
                onChangeText={setHumMin}
              />
            </View>
            <View style={styles.thresholdCard}>
              <Text style={styles.inputLabel}>Maximum Humidity (%)</Text>
              <TextInput 
                style={styles.textInput}
                keyboardType="numeric"
                value={humMax}
                onChangeText={setHumMax}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSaveThresholds}>
             <Text style={styles.saveButtonText}>UPDATE THRESHOLDS</Text>
          </TouchableOpacity>

          {/* 2. Preferences Section */}
          <Text style={[styles.sectionTitle, {marginTop: 30}]}>Preferences</Text>

          <View style={styles.menuCard}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="molecule" size={24} color="#1B4332" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Unit</Text>
            </View>
            <View style={styles.toggleContainer}>
              <TouchableOpacity onPress={() => handleUnitToggle('C')} style={[styles.unitBtn, unit === 'C' && styles.activeUnit]}>
                <Text style={[styles.unitText, unit === 'C' && styles.activeUnitText]}>°C</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleUnitToggle('F')} style={[styles.unitBtn, unit === 'F' && styles.activeUnit]}>
                <Text style={[styles.unitText, unit === 'F' && styles.activeUnitText]}>°F</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerInfo}>
             <Text style={styles.versionText}>Developed By Abacanana Team</Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;