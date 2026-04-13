import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, View } from 'react-native'
import Header from '@/components/header'
import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui'
import { ThemedText } from '@/components/themed-text'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs style={styles.container}>
        <Header />

        <TabList style={styles.tabBar}>
          <TabTrigger name="TODAY" href="/(tabs)">
            <ThemedText>TODAY</ThemedText>
          </TabTrigger>
          <TabTrigger name="HISTORY" href="/(tabs)/history">
            <ThemedText>HISTORY</ThemedText>
          </TabTrigger>
          <TabTrigger name="FOODS" href="/(tabs)/foods">
            <ThemedText>FOODS</ThemedText>
          </TabTrigger>
          <TabTrigger name="SETTINGS" href="/(tabs)/settings">
            <ThemedText>SETTINGS</ThemedText>
          </TabTrigger>
        </TabList>

        <View style={styles.content}>
          <TabSlot />
        </View>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee' },
  tabBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomWidth: 1 },
  content: { flex: 1 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: { color: 'white', fontSize: 24 }
})