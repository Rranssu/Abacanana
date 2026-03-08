import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../Dashboard/Dashboard.styles';
import TopBar from '../../components/TopBar/TopBar';
import NavBar, { ScreenName } from '../../components/NavBar/NavBar';

interface Props { onNavigate: (screen: ScreenName) => void; }

const SettingsScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <TopBar subtitle="Settings" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>Sensor Calibration & Profile Settings</Text>
        </View>
      </ScrollView>
      <NavBar activeScreen="settings" onNavigate={onNavigate} />
    </View>
  );
};
export default SettingsScreen;