import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/AddGameStyles';

const AddGameScreen = ({ navigation }) => {
  // Local states to capture information from inputs
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

// useEffect: Validates that all fields are filled
  useEffect(() => {
    const isValid = title.trim() !== '' && 
                    platform.trim() !== '' && 
                    genre.trim() !== '' && 
                    price.trim() !== '' && 
                    rating.trim() !== '';
    
    // We update the state
    setIsFormValid(isValid);
  }, [title, platform, genre, price, rating]);

  // Function to show the summary alert
  const handleAddGame = () => {
    const summary = `Title: ${title}\nPlatform: ${platform}\nGenre: ${genre}\nPrice: $${price}\nRating: ${rating.toUpperCase()}`;

    Alert.alert(
      "Game Successfully Registered!", 
      summary,
      [
        { 
          text: "OK", 
          onPress: () => handleClear() // Clears fields after closing alert
        }
      ]
    );
  };

  // Function to reset the form
  const handleClear = () => {
    setTitle('');
    setPlatform('');
    setGenre('');
    setPrice('');
    setRating('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
            <Text style={styles.headerTitle}>Add New Game</Text>

            <Text style={styles.label}>Title</Text>
            <TextInput 
              style={styles.input} 
              value={title} 
              onChangeText={setTitle} 
              placeholder="Ex: Elden Ring" 
              placeholderTextColor="#94a3b8"
            />

            <Text style={styles.label}>Platform</Text>
            <TextInput 
              style={styles.input} 
              value={platform} 
              onChangeText={setPlatform} 
              placeholder="PS5, Xbox, PC..." 
              placeholderTextColor="#94a3b8"
            />

            <Text style={styles.label}>Genre</Text>
            <TextInput 
              style={styles.input} 
              value={genre} 
              onChangeText={setGenre} 
              placeholder="Action, RPG, FPS..." 
              placeholderTextColor="#94a3b8"
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '48%' }}>
                <Text style={styles.label}>Price ($)</Text>
                <TextInput 
                  style={styles.input} 
                  value={price} 
                  onChangeText={setPrice} 
                  placeholder="59.99" 
                  keyboardType="numeric"
                  placeholderTextColor="#94a3b8"
                />
              </View>
              <View style={{ width: '48%' }}>
                <Text style={styles.label}>Rating</Text>
                <TextInput 
                  style={styles.input} 
                  value={rating} 
                  onChangeText={setRating} 
                  placeholder="E, T, M" 
                  maxLength={2}
                  placeholderTextColor="#94a3b8"
                />
              </View>
            </View>

            <View style={styles.buttonArea}>
              {/* Custom button with visual disabled state */}
              <TouchableOpacity 
                style={[styles.addButton, !isFormValid && styles.addButtonDisabled]} 
                onPress={handleAddGame}
                disabled={!isFormValid}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>REGISTER VIDEOGAME</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ marginTop: 15, alignItems: 'center', padding: 10 }} 
                onPress={handleClear}
              >
                <Text style={{ color: '#64748b', fontWeight: '600' }}>Clear fields</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddGameScreen;