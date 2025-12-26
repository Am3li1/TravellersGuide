// src/screens/HomeScreen.js
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Traveller's Guide! 🗺️</Text>
      <Text style={styles.subtitle}>Your safe route planning companion</Text>
      
      <View style={styles.featureCard}>
        <Text style={styles.featureTitle}>For Bikers & Car Drivers</Text>
        <Text style={styles.featureText}>
          • Find safe routes with amenities{'\n'}
          • Share route information{'\n'}
          • Get safety tips{'\n'}
          • Discover off-road spots
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CreateRoute')}
      >
        <Text style={styles.buttonText}>Create Your First Route</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => alert('This will show route search in future')}
      >
        <Text style={styles.secondaryButtonText}>Find Routes</Text>
      </TouchableOpacity>

      <Text style={styles.hint}>
        Tap "Create Your First Route" to test navigation
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4A6FA5',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4A6FA5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4A6FA5',
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: '#4A6FA5',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
