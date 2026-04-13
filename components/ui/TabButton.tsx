import { TabTrigger } from 'expo-router/ui'
import { ThemedText } from '@/components/themed-text'
import React from 'react'
import { TabTriggerProps } from 'expo-router/build/ui/TabTrigger'
import { StyleSheet } from 'react-native'

export default function TabButton({ name, href }: TabTriggerProps) {
  return (
    <TabTrigger name={name} href={href} style={styles.container}>
      <ThemedText>{name}</ThemedText>
    </TabTrigger>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})