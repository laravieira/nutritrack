import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Colors } from '@/constants/theme'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function MealAddItem({ style, ...props}: PressableProps) {
  const colorScheme = useColorScheme()
  const styles = useStyles(colorScheme ?? 'light')

  return (
    <Pressable {...props} style={(state) => [
      styles.container,
      typeof style === 'function' ? style(state) : style
    ]}>
      <MaterialIcons name="add-circle" size={40} style={styles.icon}/>
      <Text style={styles.text}>Add Meal</Text>
    </Pressable>
  )
}

const useStyles = (mode: 'dark' | 'light') => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors[mode].background,
    elevation: 5,
    borderRadius: 5,
    padding: 12,
    gap: 4
  },
  text: {
    color: Colors[mode].text,
    fontSize: 16,
    lineHeight: 20,
  },
  icon: {
    height: 40,
    width: 40,
    color: Colors[mode].tint
  }
})