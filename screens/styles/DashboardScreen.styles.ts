import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Clean White Background
  },
  mainPadding: {
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#B7C96B', // Olive Green
    paddingTop: 50,
    paddingBottom: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#1B4332',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 34,
    color: '#1B4332',
    fontWeight: '300', // Thin modern typography
    letterSpacing: 1,
  },
  headerSub: {
    fontSize: 14,
    color: '#1B4332',
    opacity: 0.6,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#F1E5AC', // Creamy Yellow
    borderRadius: 28,
    paddingVertical: 22,
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
    fontWeight: '500',
    opacity: 0.8,
  },
  chartCard: {
    backgroundColor: '#B7C96B', // Olive Green Card
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
    minHeight: 230,
    overflow: 'hidden',
  },
  chartTitle: {
    color: '#1B4332',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 13,
    opacity: 0.7,
    textTransform: 'uppercase',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#F7F9F2', // Soft background for buttons
    borderRadius: 30,
    padding: 6,
    alignSelf: 'center',
  },
  filterBtn: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  filterBtnActive: {
    backgroundColor: '#1B4332', // Dark Green for active
  },
  filterText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B4332',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
});