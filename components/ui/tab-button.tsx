import { useTabTrigger } from 'expo-router/ui'
import { TabTriggerProps } from 'expo-router/build/ui/TabTrigger'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'

export default function TabButton(props: TabTriggerProps) {
  const colorScheme = useColorScheme()
  const styles = useStyles(colorScheme ?? 'light')
  const { triggerProps: { isFocused, onPress, onLongPress } } = useTabTrigger(props)

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={[styles.container, isFocused && styles.focused]}>
      <Text style={[styles.text, isFocused && styles.focusedText]}>{props.name}</Text>
    </Pressable>
  )

}

const useStyles = (mode: 'dark' | 'light') => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  focused: {
    borderBottomWidth: 3,
    borderBottomColor: Colors[mode].tint,
    paddingBottom: 9,
  },
  text: {
    color: Colors[mode].text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  focusedText: {
    color: Colors[mode].tint,
  }
})