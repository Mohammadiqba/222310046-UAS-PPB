import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'document' : 'document-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={focused ? 'blue' : 'white'} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'blue',
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: ({ focused }) => [
          styles.tabBarItem,
          focused ? styles.tabBarItemSelected : styles.tabBarItemUnselected,
        ],
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'gray',
    borderTopWidth: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabBarItemSelected: {
    backgroundColor: 'blue',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'white',
  },
  tabBarItemUnselected: {
    backgroundColor: 'white',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'gray',
  },
});
