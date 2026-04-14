import { StyleSheet, Text, View } from 'react-native'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Colors } from '@/constants/theme'

type MealItemProps = {
  name: string,
  description: string
  calories: number
}

export default function MealItem(props: MealItemProps) {
  const colorScheme = useColorScheme()
  const styles = useStyles(colorScheme ?? 'light')
  const { name, description, calories } = props

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.calories}>{calories} kcal</Text>
    </View>
  )
}

const useStyles = (mode: 'dark' | 'light') => StyleSheet.create({
  container: {
    backgroundColor: Colors[mode].background,
    elevation: 5,
    borderRadius: 5,
    padding: 12,
    position: 'relative'
  },
  name: {
    color: Colors[mode].text,
    fontSize: 16,
    lineHeight: 20,
  },
  description: {
    color: Colors[mode].text,
    fontSize: 14,
    lineHeight: 20,
  },
  calories: {
    color: Colors[mode].text,
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
})