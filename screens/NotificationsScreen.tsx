import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl, SafeAreaView } from 'react-native';
import { AppContext } from '../App'; // Pulling API_BASE from global context
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/NotificationsScreen.styles';

interface NotificationItem {
  id: string;
  title: string;
  detail: string;
  time: string;
}

const NotificationsScreen = () => {
  // Use the global API URL defined in App.tsx
  const { API_BASE } = useContext(AppContext);

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Function to fetch alerts from your modular notificationRoutes
  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${API_BASE}/notifications`);
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching lab alerts:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    
    // Optional: Poll for new alerts every 60 seconds
    const interval = setInterval(fetchNotifications, 60000);
    return () => clearInterval(interval);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNotifications();
  };

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {/* Using a custom icon to give it more lab personality */}
        <MaterialCommunityIcons name="shield-alert-outline" size={24} color="#B7C96B" />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.notifTitle}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: '#1B4332', opacity: 0.5, fontWeight: '700' }}>
            {item.time}
          </Text>
        </View>
        <Text style={styles.notifDetail}>{item.detail}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F1E5AC' }}>
      <View style={styles.container}>
        {/* Branding Header Area */}
        <View style={styles.header}>
          <Text style={{ fontSize: 32, color: '#1B4332', fontWeight: '800' }}>Abacanana</Text>
          <Text style={{ color: '#1B4332', opacity: 0.7, fontWeight: '500' }}>Notifications</Text>
        </View>

        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#1B4332" />
          </View>
        ) : (
          <FlatList
            data={notifications}
            contentContainerStyle={[styles.list, { paddingBottom: 100 }]}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl 
                refreshing={refreshing} 
                onRefresh={onRefresh} 
                tintColor="#1B4332" 
              />
            }
            renderItem={renderItem}
            ListEmptyComponent={
              <View style={{ alignItems: 'center', marginTop: 100 }}>
                <MaterialCommunityIcons name="check-circle-outline" size={60} color="#1B433230" />
                <Text style={{ textAlign: 'center', marginTop: 15, opacity: 0.5, color: '#1B4332', fontWeight: '600' }}>
                  Laboratory is currently secure.{"\n"}No recent alerts.
                </Text>
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;