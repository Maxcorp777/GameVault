import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../styles/GameListStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

// Static data for the catalog (Hardcoded)
const STATIC_GAMES = [
  { id: '1', title: 'Halo Infinite', platform: 'Xbox', genre: 'FPS', price: 59.99, rating: 'M', description: 'Master Chief returns.' },
  { id: '2', title: 'God of War', platform: 'PS5', genre: 'Action', price: 69.99, rating: 'M', description: 'Kratos in Midgard.' },
  { id: '3', title: 'Elden Ring', platform: 'PC', genre: 'RPG', price: 59.99, rating: 'M', description: 'Rise, Tarnished.' },
];

const GameListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating initial loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#6366f1" />
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Loading catalog...</Text>
        </View>
      ) : (
        <FlatList
          data={STATIC_GAMES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => navigation.navigate('GameDetail', { game: item })}
            >
              <Text style={styles.title}>{item.title} 🎮</Text>
              <Text style={styles.subtitle}>{item.platform} | {item.genre}</Text>
              <Text style={styles.priceTag}>${item.price}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default GameListScreen;