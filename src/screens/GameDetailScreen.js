import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/GameDetailStyles';

const GameDetailScreen = ({ route, navigation }) => {
  // We receive the game data from the list
  const { game } = route.params;
  
  // Local state for the favorites functionality
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      {/* Back button with custom styling */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#1e293b" />
        <Text style={styles.backText}>Back to catalog</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{game.title}</Text>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={30} 
                color={isFavorite ? "#9f3eff" : "#a07cd7"} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Information Grid */}
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Ionicons name="phone-portrait-outline" size={20} color="#6366f1" />
              <Text style={styles.infoLabel}>Platform</Text>
              <Text style={styles.infoValue}>{game.platform}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="pricetag-outline" size={20} color="#059669" />
              <Text style={styles.infoLabel}>Price</Text>
              <Text style={styles.infoValue}>${game.price}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#f59e0b" />
              <Text style={styles.infoLabel}>Rating</Text>
              <Text style={styles.infoValue}>{game.rating}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="game-controller-outline" size={20} color="#8b5cf6" />
              <Text style={styles.infoLabel}>Genre</Text>
              <Text style={styles.infoValue}>{game.genre}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{game.description}</Text>
        </View>

        <TouchableOpacity 
          style={styles.buyButton}
          onPress={() => alert('Coming soon to GameVault!')}
        >
          <Text style={styles.buyButtonText}>PRE-ORDER NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailScreen;