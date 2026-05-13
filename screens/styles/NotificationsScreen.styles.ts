import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' // Changed to White
  },
  header: {
    backgroundColor: '#B7C96B', // Kept Olive Green
    paddingTop: 50,
    paddingBottom: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    // Added depth for the white background
    shadowColor: '#1B4332',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  list: { 
    padding: 20,
    paddingBottom: 100 // Extra space for the bottom bar
  },
  card: {
    backgroundColor: '#F1E5AC', // Changed from Olive to Cream for a lighter feel
    borderRadius: 28,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(27, 67, 50, 0.05)',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF', // White circle for the icon
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  notifTitle: { 
    fontSize: 17, 
    fontWeight: '700', 
    color: '#1B4332',
    marginBottom: 2
  },
  notifDetail: { 
    fontSize: 14, 
    color: '#1B4332', 
    opacity: 0.7,
    lineHeight: 18
  }
});