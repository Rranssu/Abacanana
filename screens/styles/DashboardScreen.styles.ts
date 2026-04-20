import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1E5AC',
  },
  mainPadding: {
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#B7C96B',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 32,
    color: '#1B4332',
    fontWeight: '400', // Matches the thin typography in sketch
  },
  headerSub: {
    fontSize: 16,
    color: '#1B4332',
    opacity: 0.7,
    marginTop: -5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#B7C96B', // Matched color to sketch
    borderRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    color: '#1B4332',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.8,
  },
  chartCard: {
    backgroundColor: '#B7C96B', // Matched color to sketch
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
    minHeight: 220,
  },
  chartTitle: {
    color: '#1B4332',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 14,
    opacity: 0.6,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(27, 67, 50, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  filterBtnActive: {
    backgroundColor: '#1B4332',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B4332',
  },
  filterTextActive: {
    color: '#F1E5AC',
  },
});