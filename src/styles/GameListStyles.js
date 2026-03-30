import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9', // A very light and elegant gray
    paddingHorizontal: 15,
  },
  listContent: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    // Shadows for Android
    elevation: 4,
    // Shadows for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#6366f1', // Purple/blue accent color
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  priceTag: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: '700',
    color: '#059669', // Green for the price
  }
});