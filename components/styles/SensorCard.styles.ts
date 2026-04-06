import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B7C96B', // Your original olive green
    borderRadius: 24,
    padding: 20,
    width: '48%',
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1B4332',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#1B4332',
    fontFamily: 'System',
    opacity: 0.8,
  },
  value: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B4332',
    marginTop: 4,
  }
});