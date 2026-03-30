import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Very light gray
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    color: '#1e293b',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  newsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    // Soft shadows (not neon) for a professional look
    elevation: 8, 
    shadowColor: '#6366f1', 
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  counterBadge: {
    backgroundColor: '#6366f1', // Purple/Blue to match the catalog buttons
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 20,
  },
  counterText: {
    color: '#ffffff', // White text
    fontWeight: 'bold',
    fontSize: 12,
  },
  newsTitle: {
    color: '#1e293b', // Dark title
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    color: '#64748b', // Intermediate gray for the description
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  }
});