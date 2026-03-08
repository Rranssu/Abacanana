import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './NavBar.styles';

export type ScreenName = 'dashboard' | 'notifications' | 'settings';

interface NavBarProps {
  activeScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeScreen, onNavigate }) => {
  const activeColor = '#2D4F1E';
  const inactiveColor = 'rgba(45, 79, 30, 0.4)';

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onNavigate('dashboard')} style={styles.iconButton}>
          <Ionicons 
            name={activeScreen === 'dashboard' ? "location" : "location-outline"} 
            size={28} color={activeScreen === 'dashboard' ? activeColor : inactiveColor} 
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavigate('notifications')} style={styles.iconButton}>
          <Ionicons 
            name={activeScreen === 'notifications' ? "mail" : "mail-outline"} 
            size={28} color={activeScreen === 'notifications' ? activeColor : inactiveColor} 
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavigate('settings')} style={styles.iconButton}>
          <Ionicons 
            name={activeScreen === 'settings' ? "menu" : "menu-outline"} 
            size={30} color={activeScreen === 'settings' ? activeColor : inactiveColor} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;