import { StyleSheet, Text, View } from 'react-native'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Colors } from '@/constants/theme'
import Food from '@/api/food'

export enum FOOD_VARIANT {
  FOOD = 'food',
  MEAL = 'meal'
}

type FoodItemProps = {
  food: Food,
  variant?: FOOD_VARIANT
}

export default function FoodItem(props: FoodItemProps) {
  const colorScheme = useColorScheme()
  const styles = useStyles(colorScheme ?? 'light')
  const {
    food: {
      name,
      description,
      calories,
      kilo_calories_per_gram,
      protein_per_gram,
      carbohydrates_per_gram,
      fats_per_gram
    },
    variant = 'food'
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
        {variant === FOOD_VARIANT.FOOD && (
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Text style={styles.detailsName}>Calories:</Text>
              <Text style={styles.detailsValue}>{kilo_calories_per_gram*100}/100g</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsName}>Protein:</Text>
              <Text style={styles.detailsValue}>{protein_per_gram*100}/100g</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsName}>Carbs:</Text>
              <Text style={styles.detailsValue}>{carbohydrates_per_gram*100}/100g</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsName}>Fats:</Text>
              <Text style={styles.detailsValue}>{fats_per_gram*100}/100g</Text>
            </View>
          </View>
        )}
      </View>
      {variant === FOOD_VARIANT.MEAL && (<Text style={styles.calories}>{calories} kcal</Text>)}
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
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  description: {
    color: Colors[mode].text,
    fontSize: 14,
    lineHeight: 20,
    flexGrow: 1,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    minWidth: '32%',
    maxWidth: '32%',
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsName: {
    color: Colors[mode].text,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  detailsValue: {
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