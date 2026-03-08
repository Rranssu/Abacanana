import React from 'react';
import { View, Text, StatusBar as RNStatusBar } from 'react-native';
import { styles } from './TopBar.styles';

interface TopBarProps {
  subtitle: string; // This will be "Dashboard", "Notifications", etc.
}

const TopBar: React.FC<TopBarProps> = ({ subtitle }) => {
  return (
    <>
      {/* Ensures the phone status bar (time/battery) matches the design */}
      <RNStatusBar barStyle="dark-content" backgroundColor="#C5D67E" />
      
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Abacanana</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </>
  );
};

export default TopBar;