import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/Bottombar.styles';

const Bottombar = ({ state, navigation }: any) => {
  const icons = ['map-marker', 'email', 'menu'];
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}
          >
            <MaterialCommunityIcons 
              name={icons[index]} 
              size={28} 
              color={state.index === index ? '#1B4332' : '#1B433280'} 
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Bottombar;