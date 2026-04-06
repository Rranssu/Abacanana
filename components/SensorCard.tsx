import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/SensorCard.styles';

interface SensorCardProps {
  label: string;
  value: string;
  icon: any;
}

const SensorCard: React.FC<SensorCardProps> = ({ label, value, icon }) => (
  <View style={styles.card}>
    <MaterialCommunityIcons name={icon} size={28} color="#1B4332" style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default SensorCard;