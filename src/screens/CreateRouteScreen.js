import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  Alert 
} from 'react-native';

export default function CreateRouteScreen({ navigation }) {
  const [routeName, setRouteName] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');

  const handleSave = () => {
    if (!routeName || !startPoint || !endPoint) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }
    
    // Fixed the alert formatting issue
    Alert.alert(
      'Route Saved!',
      `Route: ${routeName}\nFrom: ${startPoint}\nTo: ${endPoint}`,
      [
        { 
          text: 'OK', 
          onPress: () => {
            console.log('Route saved:', { routeName, startPoint, endPoint });
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.sectionTitle}>Create New Route</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Route Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Mountain Adventure Route"
            value={routeName}
            onChangeText={setRouteName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Start Point *</Text>
          <TextInput
            style={styles.input}
            placeholder="Where are you starting from?"
            value={startPoint}
            onChangeText={setStartPoint}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>End Point *</Text>
          <TextInput
            style={styles.input}
            placeholder="Where are you going?"
            value={endPoint}
            onChangeText={setEndPoint}
          />
        </View>

        <View style={styles.vehicleType}>
          <Text style={styles.label}>Vehicle Type (from your PRD)</Text>
          <View style={styles.vehicleButtons}>
            <TouchableOpacity 
              style={[styles.vehicleButton, styles.bikeButton]}
              onPress={() => Alert.alert('Bike Route', 'This route is suitable for bikes')}
            >
              <Text style={styles.vehicleButtonText}>🚴 Bike Route</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.vehicleButton, styles.carButton]}
              onPress={() => Alert.alert('Car Route', 'This route is suitable for cars')}
            >
              <Text style={styles.vehicleButtonText}>🚗 Car Route</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.vehicleHint}>
            Based on your PRD: App will suggest alternatives for incompatible vehicles
          </Text>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Route</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <View style={styles.prdNote}>
          <Text style={styles.prdNoteTitle}>From Your PRD:</Text>
          <Text style={styles.prdNoteText}>
            • Tag key stops (petrol stations, hospitals, food courts){'\n'}
            • Check bike vs. car compatibility{'\n'}
            • Add safety tips for solo riders{'\n'}
            • Suggest alternative routes when needed
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  vehicleType: {
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  vehicleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  vehicleButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  bikeButton: {
    backgroundColor: '#E8F5E9',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  carButton: {
    backgroundColor: '#E3F2FD',
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  vehicleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  vehicleHint: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#4A6FA5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    marginBottom: 30,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
  },
  prdNote: {
    backgroundColor: '#FFF8E1',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FFB300',
  },
  prdNoteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 5,
  },
  prdNoteText: {
    fontSize: 14,
    color: '#5D4037',
    lineHeight: 20,
  },
});
