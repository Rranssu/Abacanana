import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1E5AC' },
  header: {
    backgroundColor: '#B7C96B',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  list: { padding: 20 },
  card: {
    backgroundColor: '#B7C96B',
    borderRadius: 25,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: '#1B4332',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notifTitle: { fontSize: 18, fontWeight: '700', color: '#1B4332' },
  notifDetail: { fontSize: 14, color: '#1B4332', opacity: 0.7 }
});