import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Changed to White
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#B7C96B', // Kept Olive Green
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center',
    // Added depth for the white background
    shadowColor: '#1B4332',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '300', // Thinner, more modern look
    color: '#1B4332',
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
  content: {
    padding: 20,
    marginTop: 15,
  },
  menuCard: {
    backgroundColor: '#F1E5AC', // Changed from Olive to Cream for a "lighter" look
    borderRadius: 28, // Matches the new Dashboard card radius
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(27, 67, 50, 0.05)',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF', // White circles for icons to pop against cream
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
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
    marginTop: 2,
  },
  // Updated Unit Toggle for the new palette
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(27, 67, 50, 0.08)',
    borderRadius: 18,
    padding: 4,
    width: 100,
    justifyContent: 'space-between',
  },
  unitBtn: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 14,
  },
  activeUnit: {
    backgroundColor: '#1B4332', // Deep Forest Green active state
  },
  unitText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B4332',
  },
  activeUnitText: {
    color: '#FFFFFF', // White text when selected
  },
  footerInfo: {
    alignItems: 'center',
    marginTop: 30,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  versionText: {
    color: '#1B4332',
    opacity: 0.4,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  // Add these to your existing StyleSheet inside MenuScreen.styles.tsx

sectionTitle: {
  fontSize: 14,
  fontWeight: '800',
  color: '#1B4332',
  opacity: 0.5,
  marginBottom: 15,
  textTransform: 'uppercase',
  letterSpacing: 1.5,
},
thresholdGrid: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 12,
},
thresholdCard: {
  backgroundColor: '#F1E5AC',
  borderRadius: 20,
  padding: 15,
  width: '48%',
},
inputLabel: {
  fontSize: 11,
  fontWeight: '700',
  color: '#1B4332',
  opacity: 0.6,
  marginBottom: 5,
},
textInput: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#1B4332',
  paddingVertical: 0,
},
saveButton: {
  backgroundColor: '#1B4332',
  borderRadius: 20,
  paddingVertical: 15,
  alignItems: 'center',
  marginTop: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
saveButtonText: {
  color: '#F1E5AC',
  fontWeight: '900',
  letterSpacing: 1,
  fontSize: 13,
},
  
});