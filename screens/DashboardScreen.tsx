import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

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
    if (unit === 'F') return `${Math.round((tempC * 9 / 5) + 32)} F`;
    return `${tempC} C`;
  };

  // =========================
  // FILTER CONFIG (ICON + LABEL)
  // =========================
  const filters = [
    { key: 'minutes', icon: 'clock-outline', label: 'Min' },
    { key: 'hours', icon: 'clock-time-four-outline', label: 'Hours' },
    { key: 'days', icon: 'calendar-today', label: 'Day' },
    { key: 'weeks', icon: 'calendar-week', label: 'Week' },
  ];

  // =========================
  // CHART FIX (NO OVERLAP)
  // =========================
  const rawHistory = data?.history || [];

  const filterDensityMap: any = {
    minutes: 25,
    hours: 12,
    days: 8,
    weeks: 6,
  };

  const maxPoints = filterDensityMap[filter] || 15;

  const step = Math.max(1, Math.ceil(rawHistory.length / maxPoints));
  const sampledHistory = rawHistory.filter((_: any, i: number) => i % step === 0);

  const labelStep = Math.max(1, Math.ceil(sampledHistory.length / 5));

  const chartData = {
    labels: sampledHistory.map((h: any, i: number) =>
      i % labelStep === 0 ? h.label : ''
    ),
    datasets: [
      {
        data: sampledHistory.map((h: any) => h.temp),
        color: (opacity = 1) => `rgba(27, 67, 50, ${opacity})`,
        strokeWidth: 3,
      }
    ]
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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              fetchDashboardData();
            }}
            tintColor="#1B4332"
          />
        }
      >

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Abacanana</Text>
          <Text style={styles.headerSub}>Dashboard</Text>
        </View>

        <View style={styles.mainPadding}>

          {/* SENSOR ROW */}
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

          {/* INFO CARD */}
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              {data?.statusMessage || "Information about the crops & overview are shown in here"}
            </Text>
          </View>

          {/* =========================
              FILTERS (ICON + LABEL)
          ========================= */}
          <View style={styles.filterContainer}>
            {filters.map((f) => (
              <TouchableOpacity
                key={f.key}
                onPress={() => setFilter(f.key)}
                style={[
                  styles.filterBtn,
                  filter === f.key && styles.filterBtnActive
                ]}
              >
                <MaterialCommunityIcons
                  name={f.icon as any}
                  size={18}
                  color={filter === f.key ? "#fff" : "#1B4332"}
                />

                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 2,
                    color: filter === f.key ? "#fff" : "#1B4332",
                    fontWeight: "600"
                  }}
                >
                  {f.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* CHART */}
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
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: "#B7C96B",
                },
                propsForLabels: {
                  fontSize: 9,
                },
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