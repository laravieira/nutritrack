import React from 'react'

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, View } from 'react-native'
import Header from '@/components/header'
import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui'
import TabButton from '@/components/ui/tab-button'
import { Colors } from '@/constants/theme'
import Button from '@/components/ui/buttom'
import { useRouter } from 'expo-router'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const styles = useStyles(colorScheme ?? 'light')
  const router = useRouter()

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
      <View style={styles.floatingButton}>
        <Button onPress={() => router.navigate('/modal')}>LOG FOOD</Button>
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
  floatingButton: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 32,
    left: 0,
    right: 0,
  }
})