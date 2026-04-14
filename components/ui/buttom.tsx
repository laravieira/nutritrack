import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Colors } from '@/constants/theme'
import { ReactNode } from 'react'

export default function Button({ style, children, ...props}: PressableProps) {
  const colorScheme = useColorScheme()
  const styles = useStyles(colorScheme ?? 'light')

  return (
    <Pressable {...props} style={(state) => [
      styles.container,
      typeof style === 'function' ? style(state) : style
    ]}>
      <Text style={styles.text}>{children as ReactNode}</Text>
    </Pressable>
  )
}

const useStyles = (mode: 'dark' | 'light') => StyleSheet.create({
  container: {
    backgroundColor: Colors[mode].tint,
    elevation: 5,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  text: {
    color: Colors.dark.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
})