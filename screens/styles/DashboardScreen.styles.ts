import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E5AC', // Your original creamy yellow
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#B7C96B',
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    marginHorizontal: -20,
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 32,
    color: '#1B4332',
    fontWeight: '600',
  },
  headerSub: {
    fontSize: 16,
    color: '#1B4332',
    opacity: 0.7,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#C5D67D',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },
  infoText: {
    color: '#1B4332',
    fontSize: 15,
    lineHeight: 22,
  },
  chartCard: {
    backgroundColor: '#B7C96B',
    borderRadius: 24,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 100,
  },
  chartLabel: {
    color: '#1B4332',
    fontWeight: 'bold',
    letterSpacing: 2,
    opacity: 0.6,
  }
});