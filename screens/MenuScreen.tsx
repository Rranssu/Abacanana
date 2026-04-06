import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { styles } from './styles/MenuScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuScreen: React.FC = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [unit, setUnit] = useState('C');

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
              onValueChange={setPushEnabled}
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
            
            {/* Custom Pill Toggle */}
            <View style={styles.toggleContainer}>
              <TouchableOpacity 
                onPress={() => setUnit('C')} 
                style={[styles.unitBtn, unit === 'C' && styles.activeUnit]}
              >
                <Text style={[styles.unitText, unit === 'C' && styles.activeUnitText]}>°C</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => setUnit('F')} 
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

        {/* Padding for Bottom Nav */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;