import React from 'react'

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, View } from 'react-native'
import Header from '@/components/header'
import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui'
import TabButton from '@/components/ui/tab-button'
import { Colors } from '@/constants/theme'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const styles = useStyles(colorScheme ?? 'light')

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

const useStyles = (mode: 'dark' | 'light') => StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexGrow: 0,
    height: 54,
    paddingHorizontal: 16,
    backgroundColor: Colors[mode].background,
    elevation: 5
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
    backgroundColor: Colors[mode].tint,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: { color: 'white', fontSize: 24 }
})