import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginLeft: 5,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e293b',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoItem: {
    width: '45%',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 10,
    color: '#64748b',
    textTransform: 'uppercase',
    marginTop: 5,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
  },
  buyButton: {
    backgroundColor: '#6366f1',
    padding: 18,
    borderRadius: 16,
    marginTop: 25,
    alignItems: 'center',
    elevation: 3,
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});