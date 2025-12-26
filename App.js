import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// No navigation, no external dependencies
export default function App() {
  const handlePress = () => {
    console.log('Button pressed');
    alert('Button works! Next we add navigation.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traveller's Guide</Text>
      <Text style={styles.subtitle}>Minimal Test Version</Text>
      <Text style={styles.status}>Status: NO NAVIGATION</Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Test Button</Text>
      </TouchableOpacity>
      
      <View style={styles.featureList}>
        <Text style={styles.featureTitle}>From your PRD:</Text>
        <Text style={styles.feature}>• Route creation</Text>
        <Text style={styles.feature}>• Bike/Car compatibility</Text>
        <Text style={styles.feature}>• Safety tips</Text>
        <Text style={styles.feature}>• Off-road spots</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A6FA5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    color: '#FFD700', // Gold color
    marginBottom: 30,
    fontWeight: '600',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    minWidth: 200,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#4A6FA5',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featureList: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  feature: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    paddingLeft: 10,
  },
});
