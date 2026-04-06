import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AppContext } from '../App';
import SensorCard from '../components/SensorCard';
import { styles } from './styles/DashboardScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const { temp, humidity } = useContext(AppContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Abacanana</Text>
        <Text style={styles.headerSub}>Dashboard</Text>
      </View>

      <View style={styles.row}>
        <SensorCard label="Temperature" value={`${temp} C`} icon="thermometer" />
        <SensorCard label="Moisture" value={`${humidity}%`} icon="water-percent" />
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          <MaterialCommunityIcons name="information-outline" size={16} /> Information about the crops & overview are shown in here. Abacá health is optimal.
        </Text>
      </View>

      <View style={styles.chartCard}>
        <MaterialCommunityIcons name="chart-line" size={50} color="#1B4332" style={{opacity: 0.3}} />
        <Text style={styles.chartLabel}>LINE CHART GOES HERE</Text>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;