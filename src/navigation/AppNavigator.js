import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing icons

import GameListScreen from '../screens/GameListScreen';
import GameDetailScreen from '../screens/GameDetailScreen';
import AddGameScreen from '../screens/AddGameScreen';
import GamingNewsScreen from '../screens/GamingNewsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CatalogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GameList" component={GameListScreen} options={{ title: 'GameVault' }} />
      <Stack.Screen name="GameDetail" component={GameDetailScreen} options={{ title: 'Game Details' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'CatalogTab') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'AddTab') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'NewsTab') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }

          // Returning the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="CatalogTab" component={CatalogStack} options={{ title: 'Catalog', headerShown: false }} />
      <Tab.Screen name="AddTab" component={AddGameScreen} options={{ title: 'Add' }} />
      <Tab.Screen name="NewsTab" component={GamingNewsScreen} options={{ title: 'News' }} />
    </Tab.Navigator>
  );
}