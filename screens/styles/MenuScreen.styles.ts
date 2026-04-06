import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1E5AC', // Cream base
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#B7C96B', // Olive Header
    paddingTop: 40,
    paddingBottom: 25,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#1B4332',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1B4332',
  },
  headerSub: {
    fontSize: 16,
    color: '#1B4332',
    opacity: 0.7,
  },
  content: {
    padding: 20,
    marginTop: 10,
  },
  menuCard: {
    backgroundColor: '#B7C96B',
    borderRadius: 25,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'rgba(241, 229, 172, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B4332',
  },
  menuDetail: {
    fontSize: 13,
    color: '#1B4332',
    opacity: 0.6,
  },
  // Custom Unit Toggle Styles
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(27, 67, 50, 0.1)',
    borderRadius: 15,
    padding: 4,
    width: 90,
    justifyContent: 'space-between',
  },
  unitBtn: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 12,
  },
  activeUnit: {
    backgroundColor: '#1B4332',
  },
  unitText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1B4332',
  },
  activeUnitText: {
    color: '#F1E5AC',
  },
  footerInfo: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  versionText: {
    color: '#1B4332',
    opacity: 0.4,
    fontSize: 12,
    marginLeft: 8,
  }
});