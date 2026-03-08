import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../Dashboard/Dashboard.styles';
import TopBar from '../../components/TopBar/TopBar';
import NavBar, { ScreenName } from '../../components/NavBar/NavBar';

interface Props { onNavigate: (screen: ScreenName) => void; }

const NotificationsScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <TopBar subtitle="Notifications" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>No alerts. Your saplings are healthy!</Text>
        </View>
      </ScrollView>
      <NavBar activeScreen="notifications" onNavigate={onNavigate} />
    </View>
  );
};
export default NotificationsScreen;