import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#B7C96B',
    borderRadius: 30,
    height: 70,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
  },
  tab: { padding: 10 }
});