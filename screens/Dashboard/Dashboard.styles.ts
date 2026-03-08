import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9A1', // Light yellow background
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120, // Extra padding so content isn't hidden by NavBar
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  // Small Metric Cards (Temp & Moisture)
  metricCard: {
    backgroundColor: '#C5D67E',
    width: '47%',
    height: 150,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  metricLabel: {
    fontSize: 18,
    color: '#2D4F1E',
    marginBottom: 10,
  },
  metricValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D4F1E',
  },
  // Info Card
  infoCard: {
    backgroundColor: '#C5D67E',
    width: '100%',
    padding: 25,
    borderRadius: 25,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#2D4F1E',
    lineHeight: 22,
    textAlign: 'center',
  },
  // Chart Card
  chartCard: {
    backgroundColor: '#C5D67E',
    width: '100%',
    height: 220,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D4F1E',
    textAlign: 'center',
    opacity: 0.7,
  },
});