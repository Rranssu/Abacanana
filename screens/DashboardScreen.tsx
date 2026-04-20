import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Text, ScrollView, RefreshControl, ActivityIndicator, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { AppContext } from '../App';
import SensorCard from '../components/SensorCard';
import { styles } from './styles/DashboardScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const { API_BASE, unit } = useContext(AppContext);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState('minutes');

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(`${API_BASE}/dashboard?filter=${filter}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Dashboard Fetch Error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [filter]);

  const formatTemp = (tempC: number) => {
    if (unit === 'F') return `${Math.round((tempC * 9/5) + 32)} F`;
    return `${tempC} C`;
  };

  const chartData = {
    labels: data?.history?.map((h: any) => filter === 'minutes' ? h.label : h.label) || [],
    datasets: [{
      data: data?.history?.map((h: any) => h.temp) || [0],
      color: (opacity = 1) => `rgba(27, 67, 50, ${opacity})`, 
      strokeWidth: 3
    }]
  };

  if (loading && !refreshing) {
    return (
      <View style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#1B4332" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => {setRefreshing(true); fetchDashboardData();}} tintColor="#1B4332" />}
      >
        {/* 1. Header (Matched to Sketch) */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Abacanana</Text>
          <Text style={styles.headerSub}>Dashboard</Text>
        </View>

        <View style={styles.mainPadding}>
          {/* 2. Sensor Row (Matched to Sketch) */}
          <View style={styles.row}>
            <SensorCard 
              label="Temperature" 
              value={data ? formatTemp(data.temp) : '--'} 
              icon="thermometer" 
            />
            <SensorCard 
              label="Moisture" 
              value={`${data?.humidity ?? '--'}%`} 
              icon="water-percent" 
            />
          </View>

          {/* 3. Info Card (Matched to Sketch) */}
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
               {data?.statusMessage || "Information about the crops & overview are shown in here"}
            </Text>
          </View>

          {/* 4. Filter Selector (Functional Addition) */}
          <View style={styles.filterContainer}>
            {['minutes', 'hours', 'days', 'weeks'].map((f) => (
              <TouchableOpacity 
                key={f} 
                onPress={() => setFilter(f)}
                style={[styles.filterBtn, filter === f && styles.filterBtnActive]}
              >
                <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>
                  {f.charAt(0).toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* 5. Real Chart Card (Matched to Sketch) */}
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>TREND ANALYTICS</Text>
            <LineChart
              data={chartData}
              width={Dimensions.get("window").width - 80}
              height={160}
              chartConfig={{
                backgroundColor: "#B7C96B",
                backgroundGradientFrom: "#B7C96B",
                backgroundGradientTo: "#B7C96B",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(27, 67, 50, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(27, 67, 50, ${opacity})`,
                propsForDots: { r: "4", strokeWidth: "2", stroke: "#B7C96B" },
              }}
              withInnerLines={false}
              withOuterLines={false}
              bezier
              style={{ marginTop: 10, borderRadius: 24 }}
            />
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;