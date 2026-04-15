import { StyleSheet, View, VirtualizedList } from 'react-native'

import { ThemedText } from '@/components/themed-text'
import FoodItem, { FOOD_VARIANT } from '@/components/food-item'
import MealAddItem from '@/components/meal-add'
import Food from '@/api/food'
import { endOfDay, startOfDay } from 'date-fns'
import { useRouter } from 'expo-router'

export default function TabTodayScreen() {
  const meals = Food.getMeals({ start: startOfDay(new Date()), end: endOfDay(new Date()) })
  const router = useRouter()

  return (
    <View style={styles.container}>
      <VirtualizedList
        contentContainerStyle={styles.content}
        ListHeaderComponent={<ThemedText type="title">MEALS</ThemedText>}
        ListFooterComponent={<MealAddItem onPress={() => router.navigate('/modal')} style={{ marginBottom: 90 }} />}
        ListEmptyComponent={<MealAddItem onPress={() => router.navigate('/modal')} />}
        initialNumToRender={4}
        renderItem={({item}: {item: Food}) => <FoodItem food={item} variant={FOOD_VARIANT.MEAL} />}
        keyExtractor={item => item.id.toString()}
        getItemCount={() => meals.length}
        getItem={(_, index) => meals.at(index) as Food}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    padding: 16,
    gap: 16,
  }
});
