import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import CircularProgress from 'react-native-circular-progress-indicator'
import CurvedText from '@/components/ui/curved-text'
import { ThemedText } from '@/components/themed-text'
import LinearProgress from '@/components/ui/linear-progress'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Colors } from '@/constants/theme'
import User from '@/api/user'
import Food from '@/api/food'
import { endOfDay, startOfDay } from 'date-fns'

export default function Header() {
  const colorScheme = useColorScheme() ?? 'light'
  const styles = useStyles(colorScheme)
  const meals = Food.getMeals({ start: startOfDay(new Date()), end: endOfDay(new Date()) })

  const calories = meals.reduce((calories, meal) => calories + meal.calories, 0)
  const proteins = meals.reduce((proteins, meal) => proteins + meal.protein, 0)
  const carbohydrates = meals.reduce((carbohydrates, meal) => carbohydrates + meal.carbohydrates, 0)
  const fats = meals.reduce((fats, meal) => fats + meal.fats, 0)

  const caloriesGoal = User.kcal
  const caloriesPerGoal = Math.round(calories / caloriesGoal * 100)
  const fatsPerGoal = Math.round(fats / User.fat * 100)

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>
            NutriTrack
          </Text>
          <Image source={require('@/assets/images/icon.svg')} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <View style={styles.progress}>
            <View style={styles.progressOuterText}>
              <CurvedText
                width={210}
                height={210}
                rotate={52}
                text={`${caloriesPerGoal}% of daily goal`}
                fill={Colors.light.text}
                fontSize={13}
                fontWeight={800}
              />
            </View>
            <CircularProgress
              value={caloriesPerGoal}
              progressFormatter={(value) => {
                'worklet'

                if(value > caloriesGoal)
                  return Math.round(caloriesGoal)
                return Math.round(caloriesGoal * (1 - value / 100))
              }}
              progressValueColor={Colors.light.text}
              progressValueStyle={{ fontWeight: '800', fontSize: 32 }}
              title="kcal left"
              titleColor={Colors.light.text}
              titleStyle={{ fontWeight: '500' }}
              inActiveStrokeColor={Colors[colorScheme].tint}
              inActiveStrokeOpacity={0.2}
            />
          </View>
          <View style={styles.details}>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Protein</ThemedText>
              <ThemedText style={styles.detailsValue}>{proteins}g / {User.protein}g</ThemedText>
            </View>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Carbs</ThemedText>
              <ThemedText style={styles.detailsValue}>{carbohydrates}g / {User.carbs}g</ThemedText>
            </View>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Carbs</ThemedText>
              <LinearProgress progress={caloriesPerGoal} color={Colors[colorScheme].tint} />
            </View>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Fat</ThemedText>
              <LinearProgress progress={fatsPerGoal} color={Colors[colorScheme].tint} />
            </View>
            <View style={[styles.detailsRow, { justifyContent: 'center' }]}>
              <ThemedText style={styles.detailsValue}>{fats}g / {User.fat}g</ThemedText>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )

}

const useStyles = (mode: 'dark' | 'light') => StyleSheet.create({
  container: {
    backgroundColor: Colors[mode].backgroundTint,
    paddingHorizontal: 16,
    paddingVertical: 32,
    flexShrink: 0,
    height: '35%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 36,
  },
  title: {
    color: '#000000',
    fontWeight: 800,
    fontSize: 36,
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  progress: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  progressOuterText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
  },
  detailsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  detailsTitle: {
    color: '#151515',
    fontWeight: 'bold'
  },
  detailsValue: {
    color: '#3e3e3e'
  }
})