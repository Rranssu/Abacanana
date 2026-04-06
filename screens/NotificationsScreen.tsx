import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/NotificationsScreen.styles';

const NotificationsScreen = () => {
  const data = [
    {id: '1', title: 'Notification', detail: 'Details about the notification'},
    {id: '2', title: 'Notification', detail: 'Details about the notification'},
    {id: '3', title: 'Notification', detail: 'Details about the notification'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={{fontSize: 32, color: '#1B4332'}}>Abacanana</Text><Text style={{color: '#1B4332', opacity: 0.7}}>Notifications</Text></View>
      <FlatList
        data={data}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="alert" size={24} color="#B7C96B" />
            </View>
            <View>
              <Text style={styles.notifTitle}>{item.title}</Text>
              <Text style={styles.notifDetail}>{item.detail}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;