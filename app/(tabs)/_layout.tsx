import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, View } from 'react-native'
import Header from '@/components/header'
import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui'
import { ThemedText } from '@/components/themed-text'
import TabButton from '@/components/ui/tab-button'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs style={styles.container}>
      <Header />

      <TabList style={styles.tabBar}>
        <TabTrigger name="TODAY" href="/(tabs)">
          <TabButton name="TODAY" href="/(tabs)" />
        </TabTrigger>
        <TabTrigger name="HISTORY" href="/(tabs)/history">
          <TabButton name="HISTORY" href="/(tabs)/history" />
        </TabTrigger>
        <TabTrigger name="FOODS" href="/(tabs)/foods">
          <TabButton name="FOODS" href="/(tabs)/foods" />
        </TabTrigger>
        <TabTrigger name="SETTINGS" href="/(tabs)/settings">
          <TabButton name="SETTINGS" href="/(tabs)/settings" />
        </TabTrigger>
      </TabList>

      <View style={styles.content}>
        <TabSlot />
      </View>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flex: 1,
    flexGrow: 0,
    height: 54,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1
  },
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