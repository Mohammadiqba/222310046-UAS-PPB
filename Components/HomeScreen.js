import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [sheets, setSheets] = useState([
    { id: '1', title: 'Sheet 1', date: 'Tanggal' },
    { id: '2', title: 'Sheet 2', date: 'Tanggal' },
    { id: '3', title: 'Sheet 3', date: 'Tanggal' },
  ]);

  const renderSheet = ({ item }) => (
    <View style={styles.sheetContainer}>
      <Text style={styles.sheetTitle}>{item.title}</Text>
      <Text style={styles.sheetDate}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EasySheet</Text>
        <TouchableOpacity onPress={() => alert('Tambahkan Sheet!')}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={sheets}
        renderItem={renderSheet}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5078E1',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  sheetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  sheetTitle: {
    fontSize: 16,
  },
  sheetDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
