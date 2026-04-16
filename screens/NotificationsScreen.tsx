import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/NotificationsScreen.styles';

interface NotificationItem {
  id: string;
  title: string;
  detail: string;
  time: string;
}

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Function to fetch alerts from Express backend
  const fetchNotifications = async () => {
    try {
      // Replace with your local machine's IP address
      const response = await fetch('http://192.168.1.XX:3000/api/notifications');
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNotifications();
  };

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="alert-decagram" size={24} color="#B7C96B" />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.notifTitle}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: '#1B4332', opacity: 0.5 }}>{item.time}</Text>
        </View>
        <Text style={styles.notifDetail}>{item.detail}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header remains static as per your design */}
      <View style={styles.header}>
        <Text style={{ fontSize: 32, color: '#1B4332', fontWeight: '800' }}>Abacanana</Text>
        <Text style={{ color: '#1B4332', opacity: 0.7 }}>Notifications</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#1B4332" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={notifications}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#1B4332" />
          }
          renderItem={renderItem}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 40, opacity: 0.5, color: '#1B4332' }}>
              No recent notifications
            </Text>
          }
        />
      )}
    </View>
  );
};

export default NotificationsScreen;