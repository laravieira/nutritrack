import { useTabTrigger } from 'expo-router/ui'
import { ThemedText } from '@/components/themed-text'
import { TabTriggerProps } from 'expo-router/build/ui/TabTrigger'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function TabButton(props: TabTriggerProps) {
  const { triggerProps: { isFocused, onPress, onLongPress } } = useTabTrigger(props)

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={[styles.container, isFocused && styles.focused]}>
      <Text style={[styles.text, isFocused && styles.focusedText]}>{props.name}</Text>
    </Pressable>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  focused: {
    borderBottomWidth: 3,
    borderBottomColor: '#43b96d',
    paddingBottom: 9,
  },
  text: {
    color: '#cacaca',
    fontSize: 16,
    fontWeight: 'bold',
  },
  focusedText: {
    color: '#43b96d',
  }
})