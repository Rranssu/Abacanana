import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5D67E', // The lime green from your image
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '400', // Image looks like a clean, slightly thin font
    color: '#2D4F1E',   // Dark green text
    letterSpacing: 0.5,
  },
  subTitle: {
    fontSize: 18,
    color: '#2D4F1E',
    marginTop: -5,      // Brings the subtitle closer to the main title
    opacity: 0.8,
  },
});