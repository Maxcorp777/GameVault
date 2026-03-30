import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GAMING_NEWS } from '../data/gamingNewsData';
import { styles } from '../styles/GamingNewsStyles';

const GamingNewsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change the news every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GAMING_NEWS.length);
    }, 5000);

    //Stops the clock when you leave the screen to save RAM
    return () => clearInterval(intervalId); 
  }, []);

  const nextNews = () => setCurrentIndex((prev) => (prev + 1) % GAMING_NEWS.length);

  return (
    <SafeAreaView style={styles.container}>
      {/* Adjusting the status bar to look good on light background */}
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      
      <Text style={styles.headerText}>Trending News</Text>

      <View style={styles.newsCard}>
        <View style={styles.counterBadge}>
          <Text style={styles.counterText}>
            NEWS Nº{currentIndex + 1} / {GAMING_NEWS.length}
          </Text>
        </View>

        <Text style={styles.newsTitle}>{GAMING_NEWS[currentIndex].title}</Text>
        <Text style={styles.description}>{GAMING_NEWS[currentIndex].description}</Text>

        <TouchableOpacity 
          style={{
            backgroundColor: '#6366f1', // Purple/blue color to match the rest
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 12,
            marginTop: 10
          }}
          activeOpacity={0.7}
          onPress={nextNews}
        >
          <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GamingNewsScreen;