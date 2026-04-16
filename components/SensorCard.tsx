// SensorCard.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/SensorCard.styles';

interface SensorCardProps {
  label: string;
  value: string | number | null; // Accepts dynamic values from script.js
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  loading?: boolean; // New prop to handle fetch state from Express
}

const SensorCard: React.FC<SensorCardProps> = ({ label, value, icon, loading }) => {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons 
        name={icon} 
        size={28} 
        color="#1B4332" 
        style={styles.icon} 
      />
      <Text style={styles.label}>{label}</Text>
      
      {loading ? (
        // Show a small loader while script.js is responding
        <ActivityIndicator size="small" color="#1B4332" style={{ marginTop: 8 }} />
      ) : (
        <Text style={styles.value}>
          {value !== null ? value : '--'}
        </Text>
      )}
    </View>
  );
};

export default SensorCard;