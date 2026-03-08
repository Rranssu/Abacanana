import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Dashboard.styles';
import TopBar from '../../components/TopBar/TopBar';
import NavBar from '../../components/NavBar/NavBar';

const DashboardScreen = () => {
  // Mock function for navigation
  const handleNavigation = (screen: string) => {
    console.log("Navigate to:", screen);
  };

  return (
    <View style={styles.container}>
      {/* 1. TOP BAR */}
      <TopBar subtitle="Dashboard" />

      {/* 2. SCROLLABLE CONTENT */}
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
      >
        {/* Metric Row: Temp & Moisture */}
        <View style={styles.row}>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Temperature</Text>
            <Text style={styles.metricValue}>32 C</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Moisture</Text>
            <Text style={styles.metricValue}>40%</Text>
          </View>
        </View>

        {/* Info Box */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Information about the crops & overview are shown in here
          </Text>
        </View>

        {/* Chart Box */}
        <View style={styles.chartCard}>
          <Text style={styles.chartPlaceholderText}>LINE CHART GOES{"\n"}HERE</Text>
        </View>
      </ScrollView>

      {/* 3. NAVIGATION BAR */}
      <NavBar 
        activeScreen="dashboard" 
        onNavigate={handleNavigation} 
      />
    </View>
  );
};

export default DashboardScreen;